// 极简 docx 生成器：store-only zip + 最小 WordprocessingML
// 用法: node make_docx.mjs <output.docx> <content.json>
// content.json = [{t:'name'|'contact'|'h'|'p'|'bullet'|'proj'|'sep', text}]
import fs from 'node:fs';
import path from 'node:path';

const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function zipStore(files) {
  const chunks = [];
  const central = [];
  let offset = 0;
  for (const f of files) {
    const name = Buffer.from(f.name, 'utf8');
    const data = Buffer.isBuffer(f.data) ? f.data : Buffer.from(f.data, 'utf8');
    const crc = crc32(data);
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0);
    lh.writeUInt16LE(20, 4);      // version
    lh.writeUInt16LE(0x0800, 6);  // UTF-8 flag
    lh.writeUInt16LE(0, 8);       // stored
    lh.writeUInt16LE(0, 10); lh.writeUInt16LE(0, 12); // time/date
    lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(data.length, 18);
    lh.writeUInt32LE(data.length, 22);
    lh.writeUInt16LE(name.length, 26);
    lh.writeUInt16LE(0, 28);
    chunks.push(lh, name, data);
    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0);
    ch.writeUInt16LE(20, 4); ch.writeUInt16LE(20, 6);
    ch.writeUInt16LE(0x0800, 8);
    ch.writeUInt16LE(0, 10);
    ch.writeUInt16LE(0, 12); ch.writeUInt16LE(0, 14);
    ch.writeUInt32LE(crc, 16);
    ch.writeUInt32LE(data.length, 20);
    ch.writeUInt32LE(data.length, 24);
    ch.writeUInt16LE(name.length, 28);
    ch.writeUInt32LE(0, 42); // offset of local header
    ch.writeUInt32LE(offset, 42);
    central.push(Buffer.concat([ch, name]));
    offset += 30 + name.length + data.length;
  }
  const cd = Buffer.concat(central);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(files.length, 8);
  eocd.writeUInt16LE(files.length, 10);
  eocd.writeUInt32LE(cd.length, 12);
  eocd.writeUInt32LE(offset, 16);
  return Buffer.concat([...chunks, cd, eocd]);
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function run(text, { b = false, sz = 21, color = '222222' } = {}) {
  return `<w:r><w:rPr>${b ? '<w:b/><w:bCs/>' : ''}<w:color w:val="${color}"/><w:sz w:val="${sz}"/><w:szCs w:val="${sz}"/></w:rPr><w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;
}

function para(runs, { jc, spacing = 80, ind = 0 } = {}) {
  const pPr = `<w:pPr>${jc ? `<w:jc w:val="${jc}"/>` : ''}<w:spacing w:after="${spacing}" w:line="276" w:lineRule="auto"/>${ind ? `<w:ind w:left="${ind}"/>` : ''}</w:pPr>`;
  return `<w:p>${pPr}${runs}</w:p>`;
}

function docXml(blocks) {
  const body = blocks.map((blk) => {
    switch (blk.t) {
      case 'name':
        return para(run(blk.text, { b: true, sz: 40 }), { jc: 'center', spacing: 60 });
      case 'contact':
        return para(run(blk.text, { sz: 19, color: '555555' }), { jc: 'center', spacing: 60 });
      case 'inten':
        return para(run(blk.text, { sz: 20, color: '8a2f22', b: true }), { jc: 'center', spacing: 160 });
      case 'h':
        return para(run(blk.text, { b: true, sz: 24, color: '8a2f22' }), { spacing: 140 }) +
               `<w:p><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="6" w:color="c9a97e"/></w:pBdr><w:spacing w:after="60"/></w:pPr></w:p>`;
      case 'proj':
        return para(run(blk.text, { b: true, sz: 21 }), { spacing: 40 });
      case 'bullet':
        return para(run('•  ' + blk.text, { sz: 20 }), { ind: 240, spacing: 40 });
      case 'p':
        return para(run(blk.text, { sz: 20 }), { spacing: 60 });
      case 'sep':
        return para(run('', {}), { spacing: 40 });
      default:
        return '';
    }
  }).join('');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr></w:body></w:document>`;
}

const [out, contentPath] = process.argv.slice(2);
const blocks = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const zip = zipStore([
  { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>' },
  { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>' },
  { name: 'word/document.xml', data: docXml(blocks) },
]);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, zip);
console.log('written:', out);
