import React from 'react';
import Header from './../containers/header';
import { mount} from 'enzyme';
import { setAuthentication, incrementActionCount } from './../actions';
import AuthenticationReducer from './../reducers/authenticationReducer';
import { SET_AUTHENTICATION, INCREMENT_ACTION_COUNT } from './../actions/actions-types';
import ConnectedComponentRoot from './connectedComponnentRootTest';

describe("Test sur le header", ()=>{
  it("Render du component connected sans erreur",()=>{
    const wrapper = mount(
        <ConnectedComponentRoot>
            <Header/>
        </ConnectedComponentRoot>
    )
  });

  it("Test libéllé du lien est Connexion par défaut",()=>{
    const wrapper = mount(
        <ConnectedComponentRoot>
            <Header/>
        </ConnectedComponentRoot>
    );
    expect(wrapper.find("a").at(2).text()).toEqual("Connexion");
  });

  it("Test Simulation de connexion et vérification du label",()=>{
    const wrapper = mount(
        <ConnectedComponentRoot>
            <Header/>
        </ConnectedComponentRoot>
    );
    wrapper.find("a").at(2).simulate("click");
    expect(wrapper.find("a").at(2).text()).toEqual("Deconnexion");
  });

  it("Test type action 'INCREMENT8ACTION8COUNT'",()=>{
    const action = incrementActionCount();
    expect(action.type).toEqual(INCREMENT_ACTION_COUNT);
  });

  it("Test Reducer authentication ",()=>{
    const action = {type: SET_AUTHENTICATION, payload: true}

    const initialState ={
      isLoggedIn:false
    }
    
    expect(AuthenticationReducer(initialState, action).isLoggedIn).toEqual(true);
  });
})