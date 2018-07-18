import { Selector, t, ClientFunction } from 'testcafe';
import TestData from '../utils/constants';
import minimist from 'minimist';

export default class BasePage {
    constructor() {
        this.todoList = Selector('.todo-list');
        this.newTodo = Selector('.new-todo');
        this.toggleAll = Selector('.toggle-all');
        this.topToggle = Selector('.toggle');
        this.todoCount = Selector('.todo-count');
        this.clearCompleted = Selector('.clear-completed')
        this.completedToDo = Selector('li[class="completed"]')
        this.nonCompletedToDo = Selector('li[class=""]')
        this.setEnvURLs();
    }

    async addTodo(newTodo) {
        await t
            .click(this.newTodo)
            .typeText(this.newTodo, newTodo)
            .pressKey('enter')
    }

    async assertNewToDo(newToDo) {
        await t.expect(this.topToggle.find('label').withText(newToDo)).ok();
    }

    async removeToDo() {
        // Using client functions as a workaround for remove ToDo selector not working with TestCafe
        const removeTopTodo = Selector('.destroy');
        const removeToDoFunction = ClientFunction(() => removeTopTodo().click(), { dependencies: { removeTopTodo } });
        await removeToDoFunction();
    }

    async assertRemoveToDo(toDo) {
        await t.expect(this.topToggle.find('label').withText(toDo).exists).notOk();
    }

    async completeToDo() {
        await t.click(this.topToggle);
    }

    async selectAll() {
        await t.click(this.toggleAll);
    }

    //Select option from dropdown field
    async selectOption(selector, option) {
        await t
            .click(selector)
            .click(selector.find('option').withText(option))
    }

    async reloadPage() {
        var current_url = await t.eval(() => window.location.href);
        await t.navigateTo(current_url);
    }

    setEnvURLs() {
        const environment = this.getEnvironment();

        switch(environment) {
            case 'local':
                this.baseUrl = TestData.environment.Local;
                break;
            case 'stage':
                this.baseUrl = TestData.environment.Stage;
                break;
            default:
                this.baseUrl = TestData.environment.QA;
                break;
        }
    }

    getEnvironment() {
        const args = minimist(process.argv.slice(2));
        return args.env;
    }
}