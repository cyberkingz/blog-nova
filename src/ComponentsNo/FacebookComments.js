import React, { useState } from 'react';
import './FacebookComments.css';
import Avatar1 from '../img/avatars/1.jpg';
import Avatar2 from '../img/avatars/2.jpg';
import Avatar3 from '../img/avatars/3.jpg';
import Avatar4 from '../img/avatars/4.png';
import Avatar5 from '../img/avatars/5.jpg';
import Avatar6 from '../img/avatars/6.jpg';
import Avatar7 from '../img/avatars/7.jpg';
import Avatar8 from '../img/avatars/8.png';
import Avatar9 from '../img/avatars/9.png';

function FacebookComments() {
  const initialCommentDetails = [
    {
      name: 'Emily Smith',
      content: 'Jeg har brukt Novalight-masken i noen uker nå, og forskjellen i huden min er helt utrolig. Så fornøyd med resultatene!',
      time: '26m',
      avatar: Avatar1,
      count: '12',
    },
    {
      name: 'Sophie Jones',
      content: 'Jeg var opprinnelig skeptisk til LED-masker, men Novalight har helt endret min oppfatning. Huden min føles forfrisket og ser mye klarere ut.',
      time: '26m',
      avatar: Avatar2,
      count: '7',
    },
    {
      name: 'Lucy Brown',
      content: 'Novalight-masken har vært en spillveksler for min hudpleierutine. Den er så enkel å bruke, og resultatene er virkelig synlige.',
      time: '26m',
      avatar: Avatar3,
      count: '2',
    },
    {
      name: 'Olivia Taylor',
      content: 'Etter å ha prøvd noen masker tidligere, skiller virkelig Novalight seg ut. LED-teknologien gjør virkelig underverker for huden min.',
      time: '26m',
      avatar: Avatar4,
      count: '27',
    },
    {
      name: 'Isabella Evans',
      content: 'Jeg har alltid hatt hudproblemer, men siden jeg begynte med Novalight, har jeg lagt merke til betydelige forbedringer.',
      time: '10:32',
      avatar: Avatar5,
      count: '4',
    },
    {
      name: 'Ava Wilson',
      content: 'Fikk nettopp min Novalight-maske. Kan noen gi råd om den beste frekvensen å bruke den? Super spent på å begynne mine økter.',
      time: '9:22',
      avatar: Avatar6,
      count: '9',
    },
    {
      name: 'Lily Thomas',
      content: 'Jeg har brukt Novalight-masken tre ganger i uken, og jeg har sett en betydelig reduksjon i mine hudproblemer. Virkelig verdt investeringen.',
      time: '8:12',
      avatar: Avatar7,
      count: '1',
    },
    {
      name: 'Jessica Roberts',
      content: 'Det jeg elsker med Novalight-masken er hvordan den behandler ikke bare ansiktet, men også halsen. Sådan en fantastisk tillegg til min skjønnhetsrutine.',
      time: '4:59',
      avatar: Avatar8,
      count: '24',
    },
    {
      name: 'Grace Johnson',
      content: 'Har noen noen tips for å maksimere fordelene med Novalight-masken? Vil gjerne ha litt råd.',
      time: '',
      avatar: Avatar9,
      count: '',
    },
  ];


  const commentsPerPage = 4;
  const [visibleComments, setVisibleComments] = useState(commentsPerPage);
  const [commentDetails] = useState(initialCommentDetails);

 

  const handleLoadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => Math.min(prevVisibleComments + commentsPerPage, initialCommentDetails.length));
  };

  const visibleCommentDetails = commentDetails.slice(0, visibleComments);
  const remainingComments = initialCommentDetails.length - visibleComments;

  return (
    <div style={{ textAlign: 'left' }}>
      <div className="container">
        <div className="col-md-12" id="fbcomment">
          <div className="header_comment">
            <div className="row">
              <div className="col-md-6 text-left">
                <span className="count_comment">{/* {initialCommentDetails.length}  */}264 235 kommentarer</span>
              </div>
            </div>
          </div>

          <div className="body_comment">
            <div className="row">
              <ul id="list_comment" className="col-md-12">
                {visibleCommentDetails.map((comment, index) => (
                  <li key={index} className="box_result row" style={{listStyle: 'none'}}>
                    <div className="avatar_comment col-md-1">
                      <img src={comment.avatar} alt="avatar" />
                    </div>
                    <div className="result_comment col-md-11">
                      <h4>{comment.name}</h4>
                      <p>{comment.content}</p>
                      {comment.time && (
                        <div className="tools_comment">
                          <a className="like" href="/">Like</a>
                          <span aria-hidden="true"> · </span>
                          <a className="replay" href="/">Reply</a>
                          <span aria-hidden="true"> · </span>
                          <i className="fa fa-thumbs-o-up"></i> <span className="count">{comment.count}</span>
                          <span aria-hidden="true"> · </span>
                          <span>{comment.time}</span>
                        </div>
                      )}
                      <ul className="child_replay"></ul>
                    </div>
                  </li>
                ))}
              </ul>

              {remainingComments > 0 && (
                <button className="show_more" type="button" onClick={handleLoadMoreComments}>
                  Last mer
                </button>
              )}

              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Laster inn...
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookComments;
