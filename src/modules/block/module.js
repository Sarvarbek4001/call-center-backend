const { fetch, fetchAll } = require("../../../src/lib/posgres");

const SECTION = `
select block.block_id, block.title,block.content,block.b_row_reverse,block.section_id, block_img.b_img_id from block 
inner join block_img on block.block_id=block_img.block_id where section_id =$1
`;

const BANNER_TITLE = `
select banner_title from (select section.section_id,section.section_name,banner.banner_title from section 
inner join banner on section.section_id=banner.section_id) sec where section_id=$1;
`;

const NEW_BLOCK = `
 INSERT INTO
 block(title,content,b_row_reverse,section_id) VALUES($1,$2,$3,$4) RETURNING *
`;

const REMOVE_BLOCK = `
  DELETE 
   FROM
    block
    WHERE
     block_id = $1
     RETURNING *
`;
const UPDATE_BLOCK = `
  UPDATE
  block
  SET title =$1,
  content=$2,
  b_row_reverse=$3
  WHERE 
    block_id = $4
     RETURNING *
`;

const section = (sectionId) => fetchAll(SECTION, sectionId);
const banner_title = (sectionId) => fetchAll(BANNER_TITLE, sectionId);

const new_block = (title, content, b_row_reverse, section_id) =>
  fetch(NEW_BLOCK, title, content, b_row_reverse, section_id);

const remove_block = (blockId) => fetch(REMOVE_BLOCK, blockId);

const update_block = (title, content, b_row_reverse, blockId) =>
  fetch(UPDATE_BLOCK, title, content, b_row_reverse, blockId);

module.exports = {
  section,
  banner_title,
  new_block,
  remove_block,
  update_block,
};
