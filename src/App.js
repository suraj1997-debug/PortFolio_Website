import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/Home';
import {Route, Switch,useLocation} from 'react-router-dom';
import AboutContainer from './containers/About';
// import ResumeContainer from './containers/Resume';
import ContactContainer from './containers/Contact';
import ProjectContainer from './containers/Projects';
import { AnimatePresence } from 'framer-motion';
import ProjectSlugContainer from './containers/Projects/component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  getResume } from './redux/store';
import PortFolioContainer from './containers/PortFolio';
import ProjectCategoriesContainer from './containers/Projects/projectCategories';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getResume());
  }, [])

  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
      <Switch location={location} key={location.key}>
     <Route exact path="/" component={HomeContainer}/>
     <Route  path="/about" component={AboutContainer}/>
     {/* <Route  path="/resume" component={ResumeContainer}/> */}
     <Route  path="/contact" component={ContactContainer}/>
     <Route path="/skillsets" component={PortFolioContainer}/>
     <Route path="/project-categories" component={ProjectCategoriesContainer} />
     <Route  path="/projects/:slug" component={ProjectContainer}/>
     <Route  path="/:slug" component={ProjectSlugContainer}/>
     </Switch>
     </AnimatePresence>
    </div>
  );
}

export default App;
