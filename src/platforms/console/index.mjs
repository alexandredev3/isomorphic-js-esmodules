import chalk from 'chalk';
import chalkTable from 'chalk-table';

export default class TableConsoleComponent {
  render(data) {
    const columns = this.prepareData(data);

    const options = {
      leftPad: 2,
      columns
    };

    const table = chalkTable(options, data);

    console.log(table);
  }

  prepareData(data) {
    const [ firstItem ] = data;
    const headers = Object.keys(firstItem);

    const formatHeader = (data, index) => {
      const isEven = index % 2 === 0;

      if (isEven) {
        return chalk.cyan(data);
      }

      return chalk.green(data);
    }

    // precisamos retornar nesse formato para o chalk;
    const columns = headers.map((item, index) => ({
      field: item, // valor do header.
      name: formatHeader(item, index) // titulo do header.
    }));

    return columns;
  }
}