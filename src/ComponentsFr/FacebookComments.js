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
      content: "J'utilise le masque Novalight depuis quelques semaines maintenant, et la différence sur ma peau est tout simplement incroyable. Je suis très satisfaite des résultats !",
      time: '26m',
      avatar: Avatar1,
      count: '12',
    },
    {
      name: 'Sophie Jones',
      content: "J'étais initialement sceptique quant aux masques LED, mais le masque Novalight m'a complètement fait changer d'avis. Ma peau est rajeunie et a l'air tellement plus claire.",
      time: '26m',
      avatar: Avatar2,
      count: '7',
    },
    {
      name: 'Lucy Brown',
      content: "Le masque Novalight a changé la donne dans ma routine de soins de la peau. Il est si facile à utiliser et les résultats sont vraiment visibles.",
      time: '26m',
      avatar: Avatar3,
      count: '2',
    },
    {
      name: 'Olivia Taylor',
      content: "J'ai essayé plusieurs masques dans le passé, mais Novalight se démarque de loin. La technologie LED fait vraiment des merveilles sur ma peau.",
      time: '26m',
      avatar: Avatar4,
      count: '27',
    },
    {
      name: 'Isabella Evans',
      content: "J'ai toujours eu des problèmes de peau, mais depuis que j'ai commencé à utiliser Novalight, j'ai remarqué des améliorations significatives.",
      time: '10:32',
      avatar: Avatar5,
      count: '4',
    },
    {
      name: 'Ava Wilson',
      content: "Je viens de recevoir mon masque Novalight. Est-ce que quelqu'un peut me conseiller sur la meilleure fréquence d'utilisation ? J'ai hâte de commencer mes séances.",
      time: '9:22',
      avatar: Avatar6,
      count: '9',
    },
    {
      name: 'Lily Thomas',
      content: "J'utilise le masque Novalight trois fois par semaine et j'ai constaté une réduction considérable de mes problèmes de peau. L'investissement en vaut vraiment la peine.",
      time: '8:12',
      avatar: Avatar7,
      count: '1',
    },
    {
      name: 'Jessica Roberts',
      content: "Ce que j'aime dans le masque Novalight, c'est qu'il s’applique non seulement sur le visage mais aussi sur le cou. C'est un ajout fantastique à ma routine beauté.",
      time: '4:59',
      avatar: Avatar8,
      count: '24',
    },
    {
      name: 'Grace Johnson',
      content: "Est-ce que quelqu'un a des conseils pour maximiser les bénéfices du masque Novalight ? J'aimerais beaucoup avoir des conseils.",
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
                <span className="count_comment">264,235 commentaires</span>
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
                          <a className="like" href="/">J’aime</a>
                          <span aria-hidden="true"> · </span>
                          <a className="replay" href="/">Répondre</a>
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
                  Voir plus
                </button>
              )}

              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Chargement...
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
