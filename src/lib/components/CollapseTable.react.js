import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactNestedTable from 'react-nested-table';

import './CollapseTable.css'



var jsonData = [
  {
    "id": 0,
    "firstName": "Brannon",
    "lastName": "Tromp",
    "bs": "cross-platform generate eyeballs",
    "catchPhrase": "Cross-platform next generation analyzer",
    "companyName": "Crist LLC",
    "detail": {
      "firstName": "Haskell",
      "lastName": "Bailey",
      "address": {
        "zipCode": "19020-3006",
        "city": "Hesselton",
        "street": "Schneider Squares"
      },
      "email": "Brielle_Boyle@gmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/maiklam/128.jpg",
      "list": [
        "non",
        "dolores",
        "maiores"
      ]
    }
  },
  {
    "id": 1,
    "firstName": "Stanford",
    "lastName": "Daugherty",
    "bs": "magnetic implement portals",
    "catchPhrase": "Multi-tiered 6th generation extranet",
    "companyName": "Morissette, Treutel and Dicki",
    "detail": {
      "firstName": "Hershel",
      "lastName": "Goyette",
      "address": {
        "zipCode": "48024-2443",
        "city": "Albinashire",
        "street": "Dicki Place"
      },
      "email": "Arianna87@gmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/g3d/128.jpg",
      "list": [
        "quod",
        "iure",
        "rerum"
      ]
    }
  },
  {
    "id": 2,
    "firstName": "Hoyt",
    "lastName": "Heidenreich",
    "bs": "rich extend web services",
    "catchPhrase": "Right-sized 5th generation secured line",
    "companyName": "Herman, Kuhn and Schiller",
    "detail": {
      "firstName": "Rupert",
      "lastName": "Weissnat",
      "address": {
        "zipCode": "13181",
        "city": "Baileyborough",
        "street": "Toy Track"
      },
      "email": "Earl.Crooks@hotmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/aoimedia/128.jpg",
      "list": [
        "voluptatibus",
        "aut",
        "ipsa"
      ]
    }
  },
  {
    "id": 3,
    "firstName": "Madeline",
    "lastName": "Paucek",
    "bs": "open-source engage bandwidth",
    "catchPhrase": "Up-sized responsive knowledge base",
    "companyName": "Farrell - Johnson",
    "detail": {
      "firstName": "Deangelo",
      "lastName": "Schuster",
      "address": {
        "zipCode": "99503-7920",
        "city": "New Marilyne",
        "street": "Orpha Lane"
      },
      "email": "Garrick.Dibbert@hotmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cofla/128.jpg",
      "list": [
        "recusandae",
        "deleniti",
        "deserunt"
      ]
    }
  },
  {
    "id": 4,
    "firstName": "Quentin",
    "lastName": "Lowe",
    "bs": "revolutionary brand mindshare",
    "catchPhrase": "Synergized coherent structure",
    "companyName": "Hartmann Inc",
    "detail": {
      "firstName": "Lafayette",
      "lastName": "Glover",
      "address": {
        "zipCode": "30592",
        "city": "Heaneyshire",
        "street": "Zaria Estate"
      },
      "email": "Rogers.Auer92@yahoo.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcobarbosa/128.jpg",
      "list": [
        "tempore",
        "voluptas",
        "quibusdam"
      ]
    }
  },
  {
    "id": 5,
    "firstName": "Gavin",
    "lastName": "Metz",
    "bs": "collaborative generate e-services",
    "catchPhrase": "Face to face well-modulated superstructure",
    "companyName": "Wolff and Sons",
    "detail": {
      "firstName": "Kiel",
      "lastName": "Harber",
      "address": {
        "zipCode": "45646-5408",
        "city": "Mitchellside",
        "street": "Jakubowski Common"
      },
      "email": "Ruthie.Shanahan29@gmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg",
      "list": [
        "quam",
        "quis",
        "repudiandae"
      ]
    }
  },
  {
    "id": 6,
    "firstName": "Bettie",
    "lastName": "Senger",
    "bs": "holistic target vortals",
    "catchPhrase": "Automated logistical migration",
    "companyName": "Friesen, Schmidt and Hamill",
    "detail": {
      "firstName": "Shemar",
      "lastName": "Hammes",
      "address": {
        "zipCode": "55431",
        "city": "Albertaton",
        "street": "Tabitha Ville"
      },
      "email": "Aiden32@yahoo.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg",
      "list": [
        "voluptatem",
        "veniam",
        "doloremque"
      ]
    }
  },
  {
    "id": 7,
    "firstName": "Anais",
    "lastName": "Conn",
    "bs": "customized facilitate infrastructures",
    "catchPhrase": "User-friendly dedicated complexity",
    "companyName": "Ernser - Swift",
    "detail": {
      "firstName": "Americo",
      "lastName": "Cruickshank",
      "address": {
        "zipCode": "12653-4003",
        "city": "South Vergie",
        "street": "Hilll Forges"
      },
      "email": "Kimberly33@gmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hasslunsford/128.jpg",
      "list": [
        "sunt",
        "fuga",
        "dolores"
      ]
    }
  },
  {
    "id": 8,
    "firstName": "Hank",
    "lastName": "Weimann",
    "bs": "distributed deploy mindshare",
    "catchPhrase": "Front-line fault-tolerant analyzer",
    "companyName": "D'Amore, Morissette and Lesch",
    "detail": {
      "firstName": "May",
      "lastName": "Wehner",
      "address": {
        "zipCode": "61485-9120",
        "city": "Gerdashire",
        "street": "Conn Pike"
      },
      "email": "Reyna.Murphy46@gmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sebashton/128.jpg",
      "list": [
        "ipsa",
        "voluptatem",
        "recusandae"
      ]
    }
  },
  {
    "id": 9,
    "firstName": "Bennett",
    "lastName": "Romaguera",
    "bs": "turn-key repurpose convergence",
    "catchPhrase": "Switchable stable capability",
    "companyName": "Von Inc",
    "detail": {
      "firstName": "Willis",
      "lastName": "Wyman",
      "address": {
        "zipCode": "53518-2588",
        "city": "Enricohaven",
        "street": "Alejandrin Fort"
      },
      "email": "Ora_Baumbach@yahoo.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adamnac/128.jpg",
      "list": [
        "recusandae",
        "quia",
        "veritatis"
      ]
    }
  }
]

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class CollapseTable extends Component {
	
	
	constructor(props) {
        super(props);
        this.state = {
			jsonData : this.props.value
		}
	}
	
	componentWillMount() {
		this.props.setProps({ value: this.state.jsonData });
	}
	
    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={id}>
                <ReactNestedTable data={this.state.jsonData} />
            </div>
        );
    }
}

CollapseTable.defaultProps = {};

CollapseTable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.any,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
