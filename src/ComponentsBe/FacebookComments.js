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
      content: "Ik gebruik het Novalight Masker nu een paar weken en het verschil in mijn huid is gewoon ongelooflijk. Zo blij met de resultaten!",
      time: '26m',
      avatar: Avatar1,
      count: '12',
    },
    {
      name: 'Sophie Jones',
      content: "Ik was aanvankelijk sceptisch over LED-maskers, maar de Novalight heeft mijn mening compleet veranderd. Mijn huid voelt verjongd en ziet er zoveel helderder uit.",
      time: '26m',
      avatar: Avatar2,
      count: '7',
    },
    {
      name: 'Lucy Brown',
      content: "Het Novalight Masker heeft mijn huidverzorgingsroutine ingrijpend veranderd. Het is zo gemakkelijk te gebruiken en de resultaten zijn echt zichtbaar.",
      time: '26m',
      avatar: Avatar3,
      count: '2',
    },
    {
      name: 'Olivia Taylor',
      content: "Ik heb in het verleden een paar maskers geprobeerd, maar Novalight steekt er met kop en schouders bovenuit. De LED-technologie doet echt wonderen voor mijn huid.",
      time: '26m',
      avatar: Avatar4,
      count: '27',
    },
    {
      name: 'Isabella Evans',
      content: "Ik heb altijd huidproblemen gehad, maar sinds ik met Novalight ben begonnen, heb ik aanzienlijke verbeteringen opgemerkt.",
      time: '10:32',
      avatar: Avatar5,
      count: '4',
    },
    {
      name: 'Ava Wilson',
      content: "Ik heb net mijn Novalight masker gekregen. Kan iemand advies geven over de beste frequentie om het te gebruiken? Super enthousiast om met mijn sessies te beginnen.",
      time: '9:22',
      avatar: Avatar6,
      count: '9',
    },
    {
      name: 'Lily Thomas',
      content: "Ik gebruik het Novalight Masker nu drie keer per week en ik heb een aanzienlijke vermindering van mijn huidproblemen gezien. Echt de investering waard.",
      time: '8:12',
      avatar: Avatar7,
      count: '1',
    },
    {
      name: 'Jessica Roberts',
      content: "Wat ik zo fijn vind aan het Novalight Masker is dat het niet alleen het gezicht behandelt, maar ook de hals. Zo'n fantastische aanvulling op mijn schoonheidsregime.",
      time: '4:59',
      avatar: Avatar8,
      count: '24',
    },
    {
      name: 'Grace Johnson',
      content: "Heeft iemand tips om de resultaten van het Novalight Masker te maximaliseren? Graag wat advies.",
      time: '',
      avatar: Avatar9,
      count: '1',
    },
  ];
  

  const commentsPerPage = 4;
  const [visibleComments, setVisibleComments] = useState(commentsPerPage);
  const visibleCommentDetails = initialCommentDetails.slice(0, visibleComments);
  const remainingComments = initialCommentDetails.length - visibleComments;

  const handleLoadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => Math.min(prevVisibleComments + commentsPerPage, initialCommentDetails.length));
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <div className="container">
        <div className="col-md-12" id="fbcomment">
          <div className="header_comment">
            <div className="row">
              <div className="col-md-6 text-left">
                <span className="count_comment">264.235 Reacties</span>
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
                          <a className="like" href="/">Ik hou van</a>
                          <span aria-hidden="true"> · </span>
                          <a className="replay" href="/">beantwoorden</a>
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
                  Bekijk meer
                </button>
              )}

              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Bezig met laden...
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
