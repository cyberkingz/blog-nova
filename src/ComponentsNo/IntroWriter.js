import React from 'react'
import Img from '../img/writer.png'

function IntroWriter() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
    <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
        <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Skrevet av Judy Phillips</p>
        <p style={{fontStyle: 'italic'}}>Rynkeekspert & Seniorredaktør</p>
      </div>
    </div>

    <div>
          <p style={{fontSize: '12px', textAlign: 'center'}}>*Vi anbefaler bare produkter vi personlig har testet og elsket.</p>

      <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
          <p>Med hudproblemer som slapphet, rynker, utslett og betennelse gikk vi ut for å finne de <strong>5 beste lysbehandlingsmaskene</strong> kjent for å <strong>forbedre og forynge en vakker og ungdommelig hud.</strong></p>
          <p>Lysbehandling eller LED-masker har vært utrolig populære de siste årene. <strong>I begynnelsen var denne typen behandling bare tilgjengelig via din hudlege eller en skjønnhetsterapeut.</strong></p>
          <p><strong>Nå kan du få de samme behandlingene hjemme.</strong> Når alderen begynner å vises i ansiktet ditt, har du kanskje lett etter forskjellige måter å snu klokken tilbake på.</p>
          <p>Men, <strong>et besøk på klinikken kan koste så mye som 5114.8 NOK per økt,</strong> avhengig av hvor du bor. Siden LED-terapi aldri er en engangsforeteelse, <strong>er det bare logisk å finne en lysbehandlingsmaske som du kan bruke hjemme for å oppnå de samme resultatene</strong></p>
          <p>Vi testet 25 LED-masker, inkludert modeller fra Qure, Novalight og OmniLux. <strong>Deretter rangerte vi de 5 beste alternativene basert på følgende kriterier:</strong></p>
      </div>
    </div>
    </>
  )

}

export default IntroWriter


