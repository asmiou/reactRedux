import React from "react";
import ReactDom from "react-dom";
import TodoApp from './../components/todo-app';
import { shallow } from "enzyme";

describe("Test fonctionnement TodoApp", function(){
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<TodoApp/>);
    })

    it("Render le composant App sans erreur",()=>{
        const div = document.createElement('div');
        ReactDom.render(<TodoApp/>, div);
    });

    it("Le label contient la chaine Nouvelle tâche",()=>{
        const div = document.createElement('div');
        ReactDom.render(<TodoApp/>, div);
        expect(div.innerHTML).toContain("Nouvelle tâche");
    });

    it("Render le composant App sans erreur avec Shallow",()=>{
        expect(wrapper.html()).toContain("Nouvelle tâche");
    });

    it("Le composant TodoApp contient 2 classe css .row",()=>{
        expect(wrapper.find('.row').length).toEqual(2);
    });

    it("Change la valeur de l'input",()=>{
        wrapper.find('input').simulate("change",{
            target: {value: "text saisie dépuis le test"}
        })
        expect(wrapper.find("input").prop("value")).toEqual("text saisie dépuis le test")
    });

    it("Change la valeur de l'input",()=>{
        wrapper.find('input').simulate("change",{
            target: {value: "text saisie dépuis le test"}
        })
        expect(wrapper.find("input").prop("value")).toEqual("text saisie dépuis le test")
    });

    it("Test l'action ajout dans la TodoList",()=>{
        wrapper.find('input').simulate("change",{
            target: {value: "Aller dormir"}
        })

        wrapper.find("button").simulate("click");

        expect(wrapper.find(".list-group-item").text()).toContain("Aller dormir")
    });
})