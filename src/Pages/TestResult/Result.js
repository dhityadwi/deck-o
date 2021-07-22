import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, Link } from 'react-router-dom';
import assets from '../../assets';
import { ButtonLabel } from '../../Components/Button';
import CardAnswer from '../../Components/CardAnswer';
import DetailPage from '../../Components/YourDecks/DetailPage/DetailPage';
import { getResultTest } from '../../redux/action/testAction';

const TestResult = ({ history }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state?.test);
  const { id } = useParams();
  const resultTest = useSelector((state) => state.test?.resultTest);
  const { username } = useSelector((state) => state.login);
  // const score = useSelector(
  //   (state) => state.test?.resultTest.dtResultDecksTest[0].score
  // );

  useEffect(() => {
    dispatch(getResultTest(id));
    console.log(id + ' params');
    console.log(resultTest.dtResultDecksTest, ' 1');
  }, []);

  useEffect(() => {
    console.log(resultTest.dtResultDecksTest, ' 2');
  }, [resultTest, loading]);

  return (
    <DetailPage>
      <div>
        {!resultTest.dtResultDecksTest && !resultTest.dtResultTakeTest ? (
          <h1 style={{ textAlign: 'center', marginTop: '150px' }}>
            Loading...
          </h1>
        ) : (
          <div className="row  mb-3">
            <div className="col-lg-10 col-md-10 mx-auto">
              <div className="container-fluid">
                <div className="text-center mb-3">
                  <div
                    style={{ position: 'absolute', right: 0 }}
                    onClick={() => history.push('/home/test/choose-deck')}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                    <span className="ml-2">DONE</span>
                  </div>
                  <p className="mb-0 text-center">Machine Learning</p>
                </div>
                <div className="text-center">
                  {/* <img src={'https://ibb.co/9qyS6SQ'} width={200} /> */}
                  <img
                    src="https://i.ibb.co/mHhgkgf/Group-4398.png"
                    alt="Group-4398"
                    border="0"
                  />
                  <h4 className="mb-0 mt-2" style={{ color: '#AB6FDC' }}>
                    {resultTest?.dtResultDecksTest.length > 0
                      ? Math.floor(resultTest?.dtResultDecksTest[0].score)
                      : 'loading...'}
                    {/* {Math.floor(resultTest?.dtResultDecksTest[0].score} */}
                  </h4>
                  <p style={{ color: '#898B8F' }}>Youre Score</p>
                  {/* <h5 className="mt-3 text-bold">
                    Ooh ooh, don’t forget to study
                  </h5>
                  <p className="text-bold f-12">
                    You missed 16 out of 20 questions
                  </p> */}

                  <Link
                    to={{
                      pathname: `/detail/${id}`,
                      state: { deck_id: id, username: username },
                    }}
                  >
                    <ButtonLabel
                      title="Back to detail"
                      color="#fff"
                      className=" pt-2 pb-2 border-bottom-purple"
                      onClick={() => history.push(`detail/${id}`)}
                    />
                  </Link>

                  <div className="row">
                    {resultTest?.dtResultTakeTest.length > 0
                      ? resultTest?.dtResultTakeTest.map((data) => (
                          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <CardAnswer item={data} />
                          </div>
                        ))
                      : 'loading...'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DetailPage>
  );
};

export default withRouter(TestResult);
