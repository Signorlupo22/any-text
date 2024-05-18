let fileReader = require('../..');

const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

describe('file reader checks', () => {
  it('check xls file content', async () => {
    const filePath = `${process.cwd()}/test/files/dummy.xls`;
    expect(await fileReader.getText({filePath: filePath})).to.contains(
      'Kathleen'
    );
  });

  it('check xlsx file content', async () => {
    const filePath = `${process.cwd()}/test/files/dummy.xlsx`;
    expect(await fileReader.getText({filePath: filePath})).to.contains(
      'Kathleen'
    );
  });

  it('check pdf file content', async () => {
    const filePath = `${process.cwd()}/test/files/dummy.pdf`;
    expect(await fileReader.getText({filePath: filePath})).to.contains('Dummy');
  });

  it('check docx file content', async () => {
    const filePath = `${process.cwd()}/test/files/dummy.docx`;
    expect(await fileReader.getText({filePath: filePath})).to.contains(
      'Lorem ipsum'
    );
  });

  it('check doc file content', async () => {
    const filePath = `${process.cwd()}/test/files/dummy.doc`;
    expect(await fileReader.getText({filePath: filePath})).to.contains(
      'Welcome'
    );
  });

  it('check csv file content', async () => {
    const filePath = `${process.cwd()}/test/files/dummy.csv`;
    expect(await fileReader.getText({filePath: filePath})).to.contains(
      'First Name'
    );
  });

  it('check json file content', async () => {
    const filePath = `${process.cwd()}/test/files/dummy.json`;
    expect(await fileReader.getText({filePath: filePath})).to.contains('Doe');
  });

  it('Throw error on unknown extension', async () => {
    try {
      const filePath = `${process.cwd()}/test/files/dummy.html`;
      await fileReader.getText({filePath: filePath});
    } catch (err) {
      expect(String(err)).to.contains('Error: unknown extension found!');
    }
  });
});
