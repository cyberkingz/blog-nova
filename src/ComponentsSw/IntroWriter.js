import React from 'react'
import Img from '../img/writer.png'

function IntroWriter() {
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#334155', padding: '10px', color: 'white', gap: '0px', borderRadius: '10px'}}>
        <img src={Img} alt="" width="80px" style={{borderRadius: '100%', margin: 'auto auto'}}/>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0'}}>
          <p style={{fontWeight: 'bold', marginBottom: '0px'}}>Skriver av Judy Phillips</p>
          <p style={{fontStyle: 'italic'}}>Rynkspecialist och seniorredaktör</p>
        </div>
      </div>

      <div>
        <p style={{fontSize: '12px', textAlign: 'center'}}>Vi rekommenderar endast produkter som vi personligen har testat och älskat.</p>

        <div style={{textAlign: 'left', width: '80%', margin: 'auto auto'}}>
          <p>Med hudproblem som slapphet, rynkor, utslag och inflammation begav vi oss ut för att hitta de 5 bästa ljusbehandlingsmaskerna som är kända för att förbättra och föryngra en vacker och ungdomlig hy.</p>
          <p>Ljusbehandling eller LED-masker har varit otroligt populära de senaste åren. Till en början var den här typen av behandling endast tillgänglig genom din hudläkare eller en skönhetsterapeut.</p>
          <p>Nu kan du få samma behandlingar hemma. När åldern gör sig påmind i ditt ansikte kanske du har letat efter olika sätt att vända tillbaka tiden.</p>
          <p>Men ett besök på kliniken kan kosta så mycket som 5000.8 SEK per session, beroende på din plats. Eftersom LED-terapi aldrig är en engångsaffär, är det bara logiskt att hitta en ljusbehandlingsmask som du kan använda hemma för att uppnå samma resultat.</p>
          <p>Vi testade 25 LED-masker, inklusive modeller från Qure, Novalight och OmniLux. Sedan rankade vi de 5 bästa alternativen baserat på följande kriterier:</p> 
        </div>
      </div>
    </>
  )
}

export default IntroWriter
