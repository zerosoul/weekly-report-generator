import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Tables from './containers/Tables';
import Buttons from './containers/Buttons';
import LangDropdown from './components/LangDropdown';

// import Alert from './components/Alert';
import EditModal from './components/EditModal';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/ParticlesBackground';
import Ribbon from './components/Ribbon';
import AddButton from './components/AddButton';
import { setModal } from './redux/actions';

const App = ({ modalVisible, setModal }) => {
  const handleAddClick = () => {
    setModal(true);
  };
  return (
    <>
      <Ribbon />
      <LangDropdown />
      <EditModal />
      <Background />
      <Header />
      <Buttons />

      <Tables />
      <Footer />
      <AddButton onClick={handleAddClick}>+</AddButton>
    </>
  );
};

const mapStateToPorps = ({ modal }) => {
  return { modalVisible: modal };
};
const mapDispatchToProps = dispatch => ({
  setModal: bindActionCreators(setModal, dispatch)
});
export default connect(
  mapStateToPorps,
  mapDispatchToProps
)(App);
