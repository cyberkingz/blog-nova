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
      name: 'Émilie Dubois',
      content: "J'utilise le masque Novalight depuis quelques semaines maintenant, et la différence sur ma peau est tout simplement incroyable. Tellement satisfaite des résultats !",
      time: '26m',
      avatar: Avatar1,
      count: '12',
    },
    {
      name: 'Sophie Lellois',
      content: "J'étais initialement sceptique à propos des masques LED, mais le Novalight a complètement changé mon avis. Ma peau semble rajeunie et est beaucoup plus claire.",
      time: '26m',
      avatar: Avatar2,
      count: '7',
    },
    {
      name: 'Lucie Bernard',
      content: "Le masque Novalight a complètement changé ma routine de soins de la peau. Il est si facile à utiliser, et les résultats sont vraiment visibles.",
      time: '26m',
      avatar: Avatar3,
      count: '2',
    },
    {
      name: 'Olivia Petit',
      content: "Ayant essayé quelques masques par le passé, Novalight se démarque vraiment. La technologie LED fait vraiment des merveilles sur ma peau.",
      time: '26m',
      avatar: Avatar4,
      count: '27',
    },
    {
      name: 'Isabelle Dubois',
      content: "J'ai toujours eu des problèmes de peau, mais depuis que j'ai commencé avec Novalight, j'ai remarqué des améliorations significatives.",
      time: '10:32',
      avatar: Avatar5,
      count: '4',
    },
    {
      name: 'Eva Leroux',
      content: "Je viens de recevoir mon masque Novalight. Quelqu'un peut-il conseiller sur la meilleure fréquence d'utilisation ? Très impatiente de commencer mes sessions.",
      time: '9:22',
      avatar: Avatar6,
      count: '9',
    },
    {
      name: 'Léa Moreau',
      content: "J'utilise le masque Novalight trois fois par semaine, et j'ai vu une réduction considérable de mes problèmes de peau. Vraiment un bon investissement.",
      time: '8:12',
      avatar: Avatar7,
      count: '1',
    },
    {
      name: 'Jessica Gautier',
      content: "Ce que j'aime avec le masque Novalight, c'est qu'il traite non seulement le visage mais aussi le cou. Un ajout fantastique à ma routine beauté.",
      time: '4:59',
      avatar: Avatar8,
      count: '24',
    },
    {
      name: 'Grace Fontaine',
      content: "Quelqu'un a-t-il des astuces pour maximiser les bénéfices du masque Novalight ? J'aimerais avoir quelques conseils.",
      time: '',
      avatar: Avatar9,
      count: '1',
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
                <span className="count_comment">{/* {initialCommentDetails.length}  */}264,235 Comments</span>
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
                  Load more
                </button>
              )}

              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...
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
