import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { ButtonLabel } from '../../../Components/Button';
import { CardProgress } from '../../../Components/Card';
import DetailPage from '../../../Components/YourDecks/DetailPage/DetailPage';
import ScoredDetail from '../../../Components/ScoredDetail';
import { Link, useLocation, useHistory, useParams } from 'react-router-dom';
import ModalDelete from 'react-modal';
import { getDeckById, getDecksByUser } from '../../../redux/action/deckAction';
import {
  getPratice,
  getNeedToRecall,
  getMastered,
} from '../../../redux/action/praticeAction';
import { useDispatch, useSelector } from 'react-redux';
import { getResultTest } from '../../../redux/action/testAction';

const Detail = () => {
  const dispatch = useDispatch();
  const deckDetailById = useSelector((state) => state.deck?.deckDetailById);
  const {
    loading,
    cardsAmountNeedToStudy,
    cardsAmountNeedToRecall,
    cardsAmountMastered,
    deckByUser,
  } = useSelector((state) => state.deck);
  const resultTest = useSelector((state) => state.test?.resultTest);
  const { username } = useSelector((state) => state.login);

  const [openModal, setOpenModal] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  console.log(location.state.modal + ' detail');
  console.log(location.state.username + ' detail');

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onClickButton = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  useEffect(() => {
    dispatch(getDeckById(id));
    dispatch(getDecksByUser());
    dispatch(getResultTest(id));
  }, []);

  return (
    <div>
      {!resultTest.dtResultDecksTest && !resultTest.dtResultTakeTest ? (
        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
      ) : (
        <DetailPage>
          <div>
            <div className="row  mb-3">
              <div className="col-lg-10 col-md-12 mx-auto">
                <div className="container-fluid">
                  <nav aria-label="breadcrumb">
                    <ol
                      className="breadcrumb"
                      style={{ backgroundColor: '#fff' }}
                    >
                      <li className="breadcrumb-item">
                        <a href="/" style={{ color: '#898B8F' }}>
                          All Decks
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="/" style={{ color: '#898B8F' }}>
                          Computer Science
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                        style={{ color: '#000' }}
                      >
                        Machine Learning
                      </li>
                    </ol>
                  </nav>
                  <div
                    className="card"
                    style={{
                      backgroundColor: '#6884F5',
                      borderRadius: 10,
                    }}
                  >
                    <div className="card-body d-flex flex-direction-row justify-content-between align-items-center">
                      <div>
                        <h3 style={{ color: '#fff' }}>
                          {deckDetailById.title}
                        </h3>
                        <p style={{ color: '#fff' }} className={'mb-0'}>
                          {deckDetailById.totalTerm} Terms
                        </p>
                      </div>

                      <div
                        style={{
                          display:
                            username !== location.state.username
                              ? 'none'
                              : null,
                        }}
                      >
                        <FontAwesomeIcon
                          color={'#fff'}
                          icon={faTrash}
                          className="mr-4"
                          onClick={onClickButton}
                          style={{ cursor: 'pointer' }}
                        />

                        <Link
                          to={{
                            pathname: `/detail/edit-deck/${id}`,
                            state: {
                              dataEdit: deckByUser.filter(
                                (deck) => deck._id === id
                              )[0],
                            },
                          }}
                        >
                          <FontAwesomeIcon color={'#fff'} icon={faPencilAlt} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <ModalDelete
                    isOpen={openModal}
                    onRequestClose={onCloseModal}
                    className="modalDelete"
                  >
                    <div className="modalDelete__cont">
                      {/* <span onClick={this.onCloseModal}>X</span> */}
                      <h3>Uh-oh, heads up!</h3>
                      <p>Are you sure want to delete this deck?</p>
                      <div className="modalDelete__btn">
                        <button className="modalDelete__yes">Yes</button>
                        <button className="modalDelete__no">No</button>
                      </div>
                    </div>
                  </ModalDelete>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="d-flex flex-direction-row mt-4 align-items-center">
                        <h5 className="pr-2">on</h5>
                        <ButtonLabel
                          title={deckDetailById.nameCategory}
                          backgroundColor={'#FBF7FF'}
                        />
                      </div>
                      <div className="mt-2">
                        <p
                          className="pr-2 text-mute"
                          style={{ color: '#898B8F' }}
                        >
                          All terms and examples related to machine learning
                        </p>
                        <div className="border mt-2" />
                        <h4 className="mt-3">Your Progress</h4>
                        <p className="pr-2" style={{ color: '#898B8F' }}>
                          Your progress is based on the time you studied, or so
                          called preview, the deck.
                        </p>
                        <div
                          onClick={() =>
                            history.push(`/study/${id}`, {
                              deckid: id,
                              praticeFor: 'needtostudy',
                              username: location.state.username,
                            })
                          }
                        >
                          <CardProgress
                            label="Not studied"
                            progress={
                              ((cardsAmountNeedToRecall +
                                cardsAmountMastered -
                                deckDetailById?.totalTerm) /
                                deckDetailById?.totalTerm) *
                              100
                            }
                            text={
                              cardsAmountNeedToRecall +
                              cardsAmountMastered -
                              deckDetailById?.totalTerm
                            }
                          />
                        </div>

                        <div
                          onClick={() =>
                            history.push(`/study/${id}`, {
                              deckid: id,
                              praticeFor: 'needtorecall',
                              username: location.state.username,
                            })
                          }
                        >
                          <CardProgress
                            label="Need To Recall"
                            progress={
                              (cardsAmountNeedToRecall /
                                deckDetailById?.totalTerm) *
                              100
                            }
                            text={cardsAmountNeedToRecall}
                          />
                        </div>
                        <div
                          onClick={() =>
                            history.push(`/study/${id}`, {
                              deckid: id,
                              praticeFor: 'mastered',
                              username: location.state.username,
                            })
                          }
                        >
                          <CardProgress
                            label="Mastered"
                            progress={
                              (cardsAmountMastered / deckDetailById.totalTerm) *
                              100
                            }
                            text={cardsAmountMastered}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5  col-sm-12 col-12 ml-auto">
                      <div className="card mt-4" style={{ borderRadius: 10 }}>
                        <div className="card-body">
                          <h4 className="mt-3">Your Test Result</h4>
                          <p className="pr-2" style={{ color: '#898B8F' }}>
                            {resultTest?.dtResultDecksTest.length > 0
                              ? 'Your last score for this deck                                '
                              : 'You havent take test for this deck'}
                          </p>

                          <ScoredDetail
                            score={
                              resultTest?.dtResultDecksTest.length > 0
                                ? Math.floor(
                                    resultTest?.dtResultDecksTest[0].score
                                  )
                                : 0
                            }
                          />
                          <ButtonLabel
                            onClick={() => history.push('/home/test')}
                            title="Take a test"
                            className={'w-100 pb-2 pt-2 border-bottom-purple'}
                            backgroundColor={'#FBF7FF'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DetailPage>
      )}
    </div>
  );
};

export default Detail;
