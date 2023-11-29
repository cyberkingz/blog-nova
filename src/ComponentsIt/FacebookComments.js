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
      name: 'Michela',
      content: "Sto usando la maschera Novalight da qualche settimana e la differenza nella mia pelle è semplicemente incredibile. Sono molto soddisfatta dei risultati!",
      time: '26m',
      avatar: Avatar1,
      count: '12',
    },
    {
      name: 'Sofia',
      content: "Inizialmente ero scettica sulle maschere LED, ma Novalight mi ha fatto cambiare idea. La mia pelle è ringiovanita e ha un aspetto molto più chiaro.",
      time: '26m',
      avatar: Avatar2,
      count: '7',
    },
    {
      name: 'Lucia',
      content: "La maschera Novalight ha cambiato la mia routine di cura della pelle. È così facile da usare e i risultati sono davvero visibili.",
      time: '26m',
      avatar: Avatar3,
      count: '2',
    },
    {
      name: 'Francesca',
      content: "Avendo provato alcune maschere in passato, Novalight si distingue di gran lunga. La tecnologia LED fa davvero miracoli sulla mia pelle.",
      time: '26m',
      avatar: Avatar4,
      count: '27',
    },
    {
      name: 'Isabella',
      content: "Ho sempre avuto problemi di pelle, ma da quando ho iniziato a usare Novalight ho notato notevoli miglioramenti.",
      time: '10:32',
      avatar: Avatar5,
      count: '4',
    },
    {
      name: 'Eva',
      content: "Ho appena ricevuto la mia maschera Novalight. Qualcuno può consigliarmi la frequenza migliore per usarla? Non vedo l'ora di iniziare le mie sessioni.",
      time: '9:22',
      avatar: Avatar6,
      count: '9',
    },
    {
      name: 'Lily Thomas',
      content: "Ho usato la maschera Novalight tre volte alla settimana e ho notato una notevole riduzione dei miei problemi di pelle. Vale davvero l'investimento.",
      time: '8:12',
      avatar: Avatar7,
      count: '1',
    },
    {
      name: 'Jessica',
      content: "Ciò che mi piace della maschera Novalight è che non tratta solo il viso ma anche il collo. Un'aggiunta fantastica alla mia routine di bellezza.",
      time: '4:59',
      avatar: Avatar8,
      count: '24',
    },
    {
      name: 'Grazia',
      content: "Qualcuno ha qualche consiglio per massimizzare i benefici della maschera Novalight? Mi piacerebbe ricevere qualche consiglio.",
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
                <span className="count_comment">264,235 Commenti</span>
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
                          <a className="like" href="/">Amo</a>
                          <span aria-hidden="true"> · </span>
                          <a className="replay" href="/">Rispondere</a>
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
                  Vedi altro
                </button>
              )}

              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Caricamento...
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
