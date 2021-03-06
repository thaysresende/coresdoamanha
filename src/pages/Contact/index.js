import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import img1 from './img/cores-Jouse@2x.png';
import img2 from './img/cores-Sede@2x.png';
import './styles.css';
import map from './img/map-marker-alt.png';
import cel from './img/phone.png';
import './styles.css';
import swal from 'sweetalert';


function Contact(){
    window.scrollTo(0, 0);

    const handleSubmit = (e) => {
        e.preventDefault()
        let myForm = document.getElementById('contact-form');
        let formData = new FormData(myForm)
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        }).then(() => { 
            swal("Seu e-mail foi enviado!", "Obrigado por entrar em contato conosco, iremos lhe responder assim que possível!", "success");
            document.getElementById("contact-form").reset();
        }).catch((error) =>
        swal("Ops! Algo deu errado...", "Houve um erro ao enviar seu e-mail, tente novamente!","warning"))
    }

    return (
        <div className="contact">
            <div className="contactbg">
                <Header title="Entre em contato conosco" />
            </div>
            <div className="form">
                <p>Tem alguma dúvida, sugestão ou deseja entrar em contato conosco? Preencha o formulário ou nos contate através desses contatos, estamos disponíveis para te atender!</p>

                <form id="contact-form" name="contact" method="post" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="rowform">
                        <input placeholder="Nome" type="text"  name="name" required/>
                        <input placeholder="E-mail" type="text"  name="email" required/>
                    </div>
                    <div className="rowform">
                        <input placeholder="Telefone" type="text" name="phone" />
                        <input placeholder="Assunto" type="text" name="subject" />
                    </div>
                    <div className="rowform">
                        <textarea placeholder="Escreva sua mensagem..." type="text" name="message" required/>
                    </div>

                    <button type="submit" className="button">Enviar</button>
                </form>
            </div>
            <div className="infos">
                <div className="column">
                    <div>
                        <h3>Nossa sede</h3>
                        <p>Nossa sede fica na Comunidade do Totó, em Recife! Venha nos visitar, vamos te receber de braços abertos e com muito carinho!</p>
                        <p><img src={map} alt="Ícone de mapa" className="icon"/>  Localização<br/>
                        Sede de Fundação<br/>Rua Ana Carneiro de Albuquerque, 94 - Totó Recife – PE – CEP: 50.791-460</p>
                        <p>Espaço Cultural Cores do Amanhã Av. Garota de Ipanema Box – 02/03 Totó - Jardim Planalto CEP: 50920-680 Recife – PE – Brasil</p>
                    </div>
                    <div>
                        <img src={img1} alt="teste" />
                    </div>
                </div>
                <div className="column">
                    <div>
                        <img src={img2} alt="teste" />
                    </div>
                    <div>
                        <p><img src={cel} alt="Ícone de telefone" className="icon"/> Contato e informações <br/> Movimento Social e Cultural Cores do Amanhã movimentoculturalcoresdoamanha@gmail.com <br/>(81) 3037.2338<br/>CNPJ: 13.449.687/0001/99 | Inscrição Municipal: 476.864-7 <br/> Decreto de Lei de utilidade Pública Municipal: 18.621/19</p>
                        <p>Jouse Barata de Queiroz - Presidente <br/>Contatos: (81) 9 8876-3593 / (81) 9 9678-1217 <br/>e-mail: coresdoamanha2019@gmail.com</p>
                        <p>Coordenação Geral Adelson Henrique | Erinaldo Maia | Fagner Cleiton <br/> Email: admcoresdoamanha19@gmail.com</p>
                        <p>Coordenação Pedagógica <br/>Elton Ramos (Psicólogo) | Raquel Araújo (Pedagoga) Maria da Conceição (Pedagoga) | Alberto Pires (Jurídico)</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Contact;
