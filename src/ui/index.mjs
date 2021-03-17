// vai entender em que platform esse codigo esta sendo rodado.
// e o que ele tem que rendelizar de acordo com a platforma.
import { database } from '../shared/data.mjs'

// se tiver a variavel global quer disse que é browser.
const platform = globalThis.window ? 'browser' : 'console';
// Top Level await em alguns navegadores não é suportado.
const { default: ViewFactory } = await import (`../platforms/${platform}/index.mjs`);
// ViewFactory porque todas as platforma vão rendelizar uma tela.

const app = new ViewFactory();
app.render(database);
