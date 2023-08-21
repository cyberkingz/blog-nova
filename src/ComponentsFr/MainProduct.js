import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import IMG from '../img/Nova.jpg';
import { Check } from '@mui/icons-material';
import './MainProduct.css';

function MainProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ textAlign: 'left', width: '80%', margin: 'auto auto' }}>

        <div style={{ marginTop: '80px' }}>
          <p style={{ fontWeight: 'bold' }}>Coût</p>
          <p>Nous avons obtenu d'excellents résultats avec des masques LED coûtant moins de <strong>300€</strong>. En fait, notre premier choix était l'option la moins chère!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Résultats</p>
          <p>Nous avons utilisé ces masques LED régulièrement pour déterminer combien de temps il faudrait pour obtenir des résultats notables dans la réduction des rides et du relâchement.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Sûr pour une utilisation à domicile</p>
          <p>Chacun de ces masques de photothérapie est approuvé par un dermatologue et sûr pour une utilisation à domicile.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
        <h2 style={{background: '#818cf8', color: 'white', width: '120px', margin: '15px auto', borderRadius: '25px'}}>195€</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>Pourquoi les dermatologues ont choisi le Regenmask de Novalight comme la meilleure option de masque LED à domicile</h3>
            <p>Nous avons absolument adoré Regenmask, un produit qui a acquis une énorme popularité. Actuellement, il bénéficie d'une réduction de 50%, ce qui en fait le masque LED le plus abordable pour une utilisation à domicile. Ce masque est capable de désobstruer les pores et de purifier la peau tout en prévenant les signes du vieillissement prématuré. Il couvre également le cou, une zone souvent oubliée du vieillissement cutané.</p>
            <p>Nous l'avons utilisé tous les jours pendant 20 minutes comme Novalight le suggère, entre 15 et 30 minutes par jour. C'était simple et confortable, tout en travaillant à nous débarrasser des signes de l'exposition au soleil au fil des ans. Et pas étonnant qu'il fonctionne si bien... Il utilise la technologie LED de la NASA pour traiter les problèmes de pigmentation, les rougeurs, la peau sèche et les rides. À la fin, nous étions éblouis par l'éclat, la perfection et la beauté de notre peau! Les résultats sont vraiment de qualité professionnelle. Et avec 50% de réduction, cela le ramène à seulement 195€. Mais dépêchez-vous, il faut le commander aujourd'hui pour bénéficier de ce prix incroyablement bas.</p>
          </div>

          <div className="ListSection" style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Approuvé par les dermatologues pour la sécurité de la peau.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Utilise la technologie LED de la NASA pour le traitement de la peau.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Couvre également le cou, ciblant une zone souvent négligée.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center',  fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Adapté à une utilisation quotidienne, avec des sessions de 15 à 30 minutes.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Actuellement disponible à un prix réduit de 195€.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-uk.com/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 La Meilleure Option</Button>
        <p>*Le stock est en baisse</p>
      </div>

      <Divider />
    </div>
  )
}

export default MainProduct;
