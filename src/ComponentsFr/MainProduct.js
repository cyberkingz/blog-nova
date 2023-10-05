import React from 'react';
import IMG from '../img/Nova.jpg';
import { Check } from '@mui/icons-material';
import './MainProduct.css';
import { Box, Button, Divider, Typography } from '@mui/material';

function MainProduct() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>

      <div style={{ textAlign: 'left', width: '80%', margin: 'auto auto' }}>
        <div style={{ marginTop: '80px' }}>
          <p style={{ fontWeight: 'bold' }}>Coût</p>
          <p>Nous avons obtenu d'excellents résultats avec des masques à LED coûtant moins de <strong>200 euros</strong>. D’ailleurs, notre premier choix était l'option la moins chère !</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Résultats</p>
          <p>Nous avons utilisé ces masques LED régulièrement afin de déterminer le temps nécessaire pour obtenir des résultats notables en matière de réduction des rides et de relâchement cutané.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Sans risque pour une utilisation à domicile</p>
          <p>Chacun de ces masques de luminothérapie est approuvé par les dermatologues et peut être utilisé à domicile en toute sécurité.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
          <h2 style={{ background: '#818cf8', color: 'white', width: '120px', margin: '15px auto', borderRadius: '25px' }}>179€</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>Pourquoi les dermatologues ont-ils choisi le Regenmask de Novalight comme la meilleure option de masque LED à domicile ?</h3>
            {/* Your updated text content here */}
            <p>Nous avons absolument adoré Regenmask, un produit qui a rassemblé de nombreux adeptes. En ce moment, il bénéficie d'une réduction de 50 %, ce qui en fait le plus abordable des masques LED que vous pouvez utiliser à la maison. Ce masque est capable de désobstruer les pores et d'éclaircir la peau tout en empêchant l’apparition des signes de vieillissement prématuré. Il comporte également une partie qui couvre le cou, l'une des zones les plus oubliées du vieillissement cutané.</p>
            <p>Nous l'avons utilisé tous les jours pendant 20 minutes alors que Novalight conseille de l'utiliser entre 15 et 30 minutes par jour. C'était sans effort et confortable, tout en nous débarrassant des signes de l'exposition au soleil accumulés au fil des ans. Et ce n'est pas étonnant qu'il fonctionne si bien... Il est doté d'une technologie LED utilisée par la NASA pour vous aider à traiter la pigmentation, les rougeurs, la peau sèche et les rides. En fin de compte, nous n'en revenons pas de l'éclat, de la perfection et de la beauté de notre peau ! Les résultats sont vraiment de qualité professionnelle. Et avec une réduction de 50 %, cela signifie qu'il ne coûte que 179 euros. Dépêchez-vous, vous devez le commander aujourd'hui pour l'obtenir à ce prix incroyablement bas.</p>
          </div>

          <div className="ListSection" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Approuvé par les dermatologues pour la santé de la peau.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Utilise la technologie LED de la NASA pour le traitement de la peau.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Couvre également le cou, ciblant ainsi une zone souvent négligée.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Convient pour une utilisation quotidienne, avec des séances de 15 à 30 minutes.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Actuellement disponible au prix réduit de 179€.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-uk.com/fr-fr/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 La meilleure des options</Button>
        <p>*Bientôt en rupture de stock</p>
      </div>

      <Divider />
    </div>
  )
}

export default MainProduct;
