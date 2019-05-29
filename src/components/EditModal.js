import React, { useEffect, useRef, useState } from 'react';
import { bindActionCreators } from 'redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { connect } from 'react-redux';
import { setModal, addItem } from '../redux/actions';
import styled from 'styled-components';
import { SlideInUp } from './Animates';
import StyledButton from './StyledButton';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #0005;
  .form {
    min-width: 80%;
    background: #6f60aa;
    padding: 1.4rem 1.8rem;
    border-radius: 0.4rem;
    text-align: center;
    position: relative;
    animation-fill-mode: both;
    animation: ${SlideInUp} 1s;
    .header {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-bottom: 1.5rem;
    }
    .inputs {
      display: flex;
      flex-direction: column;

      .input {
        color: #222;
        font-size: 1.2rem;
        padding: 0.4rem;
        border: 1px solid #666;
        border-radius: 0.2rem;
        margin-bottom: 1.2rem;
      }
    }
    .close {
      position: absolute;
      top: -0.6rem;
      right: -0.6rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid #fff;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      background: #333;
      cursor: pointer;
    }
  }
`;
const EditModal = ({ isVisible, currWeek, nextWeek, lang, setModal, addItem, item }) => {
  // const {title=null,progress=null,remark=null}=item;
  const modal = useRef(null);
  const [title, setTitle] = useState(item.title);
  const [progress, setProgress] = useState(item.progress);
  const [remark, setRemark] = useState(item.remark);
  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  const handleProgressChange = e => {
    setProgress(e.target.value);
  };
  const handleRemarkChange = e => {
    setRemark(e.target.value);
  };
  const handleClose = () => {
    enableBodyScroll(modal.current);

    setModal(false);
  };
  useEffect(() => {
    if (isVisible) {
      disableBodyScroll(modal.current);
    } else {
      setTitle(null);
      setProgress(null);
      setRemark(null);
    }
  }, [isVisible]);
  const handleAdd = () => {
    addItem({ title, progress, remark }, currWeek);
    setModal(false);
  };
  console.log('title', title);
  return isVisible ? (
    <Wrapper ref={modal}>
      <section className="form">
        <h1 className="header">☕️☕️☕️</h1>
        <div className="inputs">
          <textarea
            onChange={handleTitleChange}
            className="input"
            value={title}
            placeholder={lang.placeholders.title}
            rows="1"
          />
          <input
            onChange={handleProgressChange}
            className="input"
            type="number"
            value={progress}
            placeholder={lang.placeholders.progress}
          />
          <textarea
            onChange={handleRemarkChange}
            className="input"
            value={remark}
            placeholder={lang.placeholders.remark}
            rows="4"
          />
        </div>
        <StyledButton onClick={handleAdd}>{lang.add}</StyledButton>

        <div className="close" onClick={handleClose}>
          x
        </div>
      </section>
    </Wrapper>
  ) : null;
};

const mapStateToProps = ({ modal, currWeek, nextWeek, lang, item = {} }) => {
  return { isVisible: modal, currWeek, nextWeek, lang, item };
};
const mapDispatchToProps = dispatch => ({
  setModal: bindActionCreators(setModal, dispatch),
  addItem: bindActionCreators(addItem, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal);
