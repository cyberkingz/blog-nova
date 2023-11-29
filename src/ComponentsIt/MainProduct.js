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
          <p style={{ fontWeight: 'bold' }}>Costo</p>
          <p>Abbiamo trovato ottimi risultati con le maschere LED che costano meno di <strong>200 dollari</strong>. In effetti, la nostra scelta migliore è stata l'opzione più economica!</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Risultati</p>
          <p>Abbiamo utilizzato regolarmente queste maschere LED per determinare il tempo necessario per ottenere risultati evidenti nella riduzione delle rughe e del rilassamento.</p>
          <Divider />
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>Sicuro per l'uso a casa</p>
          <p>Ognuna di queste maschere per la fototerapia è approvata dai dermatologi ed è sicura per l'uso domestico.</p>
          <Divider />
        </div>
      </div>

      <div className='imgTextWrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '30px', width: '100%', margin: 'auto auto' }}>
        <div className='img-container'>
          <img src={IMG} alt="" width={'50%'} className='productIMG' style={{ borderRadius: '20px', boxShadow: '0 0 10px 1px rgb(221 221 221)' }} />
          <h2 style={{ background: '#818cf8', color: 'white', width: '120px', margin: '15px auto', borderRadius: '25px' }}>179,00€</h2>
        </div>

        <div style={{ textAlign: 'left', padding: '20px', paddingBottom: '0px' }}>
          <div className='TextSection'>
            <h3>Perché i dermatologi hanno scelto Regenmask di Novalight come migliore opzione di maschera a LED per uso domestico</h3>
            <p>Ci è piaciuta molto Regenmask, un prodotto che ha riscosso un grande successo. In questo momento è anche scontata del 50%, il che la rende la più conveniente tra le maschere LED che si possono usare a casa. Questa maschera è in grado di liberare i pori e di ripulire la pelle, evitando che i segni dell'invecchiamento precoce prendano il sopravvento. Ha anche una parte che copre il collo, una delle zone più dimenticate dall'invecchiamento della pelle.</p>
            <p>L'abbiamo usata ogni giorno per 20 minuti al giorno, mentre Novalight suggerisce di usarla tra i 15 e i 30 minuti al giorno. È stata un'operazione comoda e senza sforzo, che ha permesso di eliminare i segni dell'esposizione al sole nel corso degli anni. E non c'è da stupirsi che funzioni così bene... Ha una tecnologia LED utilizzata dalla NASA per aiutare a contrastare pigmentazione, arrossamenti, pelle secca e rughe. Alla fine, non abbiamo potuto fare a meno di constatare quanto la nostra pelle fosse luminosa, impeccabile e bella! I risultati sono davvero di livello professionale. Con uno sconto del 50%, il prezzo è di soli 179,00€. Ma affrettatevi, dovete ordinarla oggi per poterla avere a questo prezzo incredibilmente basso.</p>
          </div>

          <div className="ListSection" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Dermatologicamente approvata per la sicurezza della pelle.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Utilizza la tecnologia LED della NASA per il trattamento della pelle.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Copre anche il collo, un'area comunemente trascurata.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Adatta all'uso quotidiano, con sessioni di 15-30 minuti.
              </Box>
            </Typography>
            <Typography component="div">
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <Check sx={{ color: 'green', marginRight: '5px' }} /> Attualmente disponibile al prezzo scontato di 179€.
              </Box>
            </Typography>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="contained" href="https://novalight-uk.com/it-it/products/masque-facial-avec-led-novalight" sx={{ fontWeight: 'bold', backgroundColor: '#4ade80', padding: '10px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', borderRadius: '10px' }}>👉 La migliore delle opzioni</Button>
        <p>*Le scorte si stanno esaurendo</p>
      </div>

      <Divider />
    </div>
  )

}

export default MainProduct;
