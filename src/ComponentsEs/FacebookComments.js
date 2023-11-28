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
      content: "Llevo unas semanas utilizando la mascarilla Novalight y la diferencia en mi piel es sencillamente increíble. ¡Estoy encantada con los resultados!",
      time: '26m',
      avatar: Avatar1,
      count: '12',
    },
    {
      name: 'Sophie Jones',
      content: "Al principio era escéptica respecto a las mascarillas LED, pero la Novalight me ha hecho cambiar de opinión por completo. Mi piel se siente rejuvenecida y se ve mucho más clara.",
      time: '26m',
      avatar: Avatar2,
      count: '7',
    },
    {
      name: 'Lucy Brown',
      content: "La mascarilla Novalight ha cambiado mi rutina de cuidado de la piel. Es tan fácil de usar y los resultados son realmente visibles.",
      time: '26m',
      avatar: Avatar3,
      count: '2',
    },
    {
      name: 'Olivia Taylor',
      content: "Después de haber probado unas cuantas mascarillas en el pasado, Novalight destaca con creces. La tecnología LED realmente hace maravillas en mi piel.",
      time: '26m',
      avatar: Avatar4,
      count: '27',
    },
    {
      name: 'Isabella Evans',
      content: "Siempre he tenido problemas de piel, pero desde que empecé con Novalight, he notado mejoras significativas.",
      time: '10:32',
      avatar: Avatar5,
      count: '4',
    },
    {
      name: 'Ava Wilson',
      content: "Acabo de recibir mi mascarilla Novalight. ¿Alguien puede aconsejarme sobre la mejor frecuencia para usarla? Estoy super emocionada por empezar mis sesiones.",
      time: '9:22',
      avatar: Avatar6,
      count: '9',
    },
    {
      name: 'Lily Thomas',
      content: "He estado utilizando la mascarilla Novalight tres veces por semana y he observado una reducción considerable de mis problemas de piel. Realmente vale la pena la inversión.",
      time: '8:12',
      avatar: Avatar7,
      count: '1',
    },
    {
      name: 'Jessica Roberts',
      content: "Lo que me encanta de la mascarilla Novalight es cómo trata no sólo la cara sino también el cuello. Un complemento fantástico para mi régimen de belleza.",
      time: '4:59',
      avatar: Avatar8,
      count: '24',
    },
    {
      name: 'Grace Johnson',
      content: "¿Alguien tiene algún consejo para maximizar los beneficios de la mascarilla Novalight? Me encantaría algún consejo.",
      time: '',
      avatar: Avatar9,
      count: '',
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
                <span className="count_comment">264.235 Comentarios</span>
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
                          <a className="like" href="/">Me gusta</a>
                          <span aria-hidden="true"> · </span>
                          <a className="replay" href="/">Respuesta</a>
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
                  Ver más
                </button>
              )}

              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Cargando...
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
