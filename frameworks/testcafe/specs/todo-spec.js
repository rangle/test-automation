import t from 'testcafe';
import BasePage from '../pageobjects/base-page';
import TestData from '../utils/constants';

const basePage = new BasePage();

fixture `ToDo list operations`
    .page `${basePage.baseUrl}`;

test('Add ToDo', async t => {
    const newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    await basePage.assertNewToDo(newToDo);
    await t.expect(basePage.clearCompleted.exists).notOk();
});

test('Remove ToDo', async t => {
    const newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    await basePage.removeToDo();
    await basePage.assertRemoveToDo(newToDo);
    await t.expect(basePage.clearCompleted.exists).notOk();
});

test('Complete ToDo', async t => {
    const newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    await basePage.completeToDo();
    await t.expect(basePage.completedToDo.exists).ok();
    await t.expect(basePage.clearCompleted.exists).ok();
});

test('Select All', async t => {
    let newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    await basePage.selectAll();
    await t.expect(basePage.nonCompletedToDo.exists).notOk();
    await t.expect(basePage.clearCompleted.exists).ok();
});

test('Unselect All', async t => {
    let newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    await basePage.selectAll();
    await t.expect(basePage.nonCompletedToDo.exists).notOk();
    await basePage.selectAll(); //Unselects All
    await t.expect(basePage.completedToDo.exists).notOk();
    await t.expect(basePage.clearCompleted.exists).notOk();
});

test('Validate Lists', async t => {
    let newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    await basePage.completeToDo();
    await t.navigateTo('/examples/react/#/');
    await t.expect(basePage.completedToDo.exists).ok();
    await t.expect(basePage.nonCompletedToDo.exists).ok();
    await t.navigateTo('/examples/react/#/active');
    await t.expect(basePage.nonCompletedToDo.exists).ok();
    await t.expect(basePage.completedToDo.exists).notOk();
    await t.navigateTo('/examples/react/#/completed');
    await t.expect(basePage.completedToDo.exists).ok();
    await t.expect(basePage.nonCompletedToDo.exists).notOk();
});

test('Clear Completed', async t => {
    let newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    newToDo = TestData.dynamicTodo();
    await basePage.addTodo(newToDo);
    await t.expect(basePage.clearCompleted.exists).notOk();
    await basePage.completeToDo();
    await t.expect(basePage.clearCompleted.exists).ok();
    await t.click(basePage.clearCompleted);
    await t.expect(basePage.completedToDo.exists).notOk();
    await t.expect(basePage.clearCompleted.exists).notOk();

});
