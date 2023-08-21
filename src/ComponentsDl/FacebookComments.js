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
      name: 'Emilie Müller',
      content: "Ich benutze die Novalight-Maske jetzt seit einigen Wochen und der Unterschied auf meiner Haut ist einfach unglaublich. So zufrieden mit den Ergebnissen!",
      time: '26m',
      avatar: Avatar1,
      count: '12',
    },
    {
      name: 'Sophia Schneider',
      content: "Ich war anfangs skeptisch gegenüber LED-Masken, aber Novalight hat meine Meinung völlig geändert. Meine Haut sieht verjüngt aus und ist viel klarer.",
      time: '26m',
      avatar: Avatar2,
      count: '7',
    },
    {
      name: 'Lena Fischer',
      content: "Die Novalight-Maske hat meine Hautpflegeroutine völlig verändert. Sie ist so einfach zu bedienen und die Ergebnisse sind wirklich sichtbar.",
      time: '26m',
      avatar: Avatar3,
      count: '2',
    },
    {
      name: 'Olivia Klein',
      content: "Nachdem ich in der Vergangenheit einige Masken ausprobiert hatte, sticht Novalight wirklich hervor. Die LED-Technologie wirkt wirklich Wunder auf meiner Haut.",
      time: '26m',
      avatar: Avatar4,
      count: '27',
    },
    {
      name: 'Isabelle Meyer',
      content: "Ich hatte schon immer Hautprobleme, aber seit ich mit Novalight begonnen habe, habe ich signifikante Verbesserungen bemerkt.",
      time: '10:32',
      avatar: Avatar5,
      count: '4',
    },
    {
      name: 'Eva Wagner',
      content: "Ich habe gerade meine Novalight-Maske erhalten. Kann jemand Ratschläge zur besten Anwendungsfrequenz geben? Ich bin sehr gespannt auf den Beginn meiner Sitzungen.",
      time: '9:22',
      avatar: Avatar6,
      count: '9',
    },
    {
      name: 'Lara Bauer',
      content: "Ich benutze die Novalight-Maske dreimal pro Woche und habe eine erhebliche Verringerung meiner Hautprobleme bemerkt. Wirklich eine gute Investition.",
      time: '8:12',
      avatar: Avatar7,
      count: '1',
    },
    {
      name: 'Jessica Huber',
      content: "Was ich an der Novalight-Maske mag, ist, dass sie nicht nur das Gesicht behandelt, sondern auch den Hals. Eine fantastische Ergänzung zu meiner Schönheitsroutine.",
      time: '4:59',
      avatar: Avatar8,
      count: '24',
    },
    {
      name: 'Greta Schmidt',
      content: "Hat jemand Tipps, um die Vorteile der Novalight-Maske zu maximieren? Ich würde gerne einige Ratschläge haben.",
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
                <span className="count_comment">{/* {initialCommentDetails.length}  */}264,235 Kommentare</span>
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
                          <a className="like" href="/">Gefällt mir</a>
                          <span aria-hidden="true"> · </span>
                          <a className="replay" href="/">Antworten</a>
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
                  Mehr anzeigen
                </button>
              )}

              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Wird geladen...
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