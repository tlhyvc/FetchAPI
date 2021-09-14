import { LitElement, html } from 'lit-element';

class FetchUsers extends LitElement{
   
    static get properties(){
        return {data: Object};
    }

    connectedCallback(){
        super.connectedCallback();
        this.fetchDataFromUrl();
    }

    fetchDataFromUrl(){
        fetch('http://localhost:8080/ogrenci/getAll')
        .then(response => response.json())
        .then(x => { this.data = x})
        .catch(err => console.log(err));
    }
    render(){
      
      return this.data ?   
      html`
             <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
             <div>
              <h2>Ogrenciler</h2>
              <ul>
                   ${this.data.map(u => html 
                    `<li>
                    <h3> ${u.id}</h3>
                    <p>${u.number}</p>
                    <p>${u.name}</p>

                    </li> <hr> 
                `)} 
              </ul> 
          </div>` 
      
      
      : html `<span>Gelmedi</span>`
       
    }
}

customElements.define('fetch-users',FetchUsers);
