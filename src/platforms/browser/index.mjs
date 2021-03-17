// rendelizar um tabela dependendo do ambiente que estiver rodando.
export default class TableWebComponent {
  render(data) {
    const htmlTemplate = this.prepareData(data);

    document.body.insertAdjacentHTML('afterBegin', htmlTemplate);
  }

  prepareData(data) {
    const [ firstItem ] = data;
    const joinLists = (list) => {
      return list.join('');
    };

    // chama dos objetos
    const tHeaders = Object.keys(firstItem)
      .map((text) => {
        return `<th scope="col">${text}</th>`
      });

    const tBody = data
      .map((item) => Object.values(item))
      .map((item) => item.map(value => `<td>${value}</td>`))
      .map((tds) => `<tr>${joinLists(tds)}</tr>`);

    console.log(tBody)

    const template = `
      <table class="table table-dark">
        <thead>
          ${joinLists(tHeaders)}
        </thead>
        <tbody>
          ${joinLists(tBody)}
        </tbody>
      </table>
    `;

    return template;
  }
}