import collapse_table
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

jsonData = [
  {
    "id": 0,
    "firstName": "Brannon",
    "lastName": "Tromp",
    "bs": "cross-platform generate eyeballs",
    "catchPhrase": "Cross-platform next generation analyzer",
    "companyName": "Crist LLC",
    "detail": [{
      "firstName": "Haskell",
      "lastName": "Bailey"
    },{
      "firstName": "Haskell",
      "lastName": "Bailey"
    }]
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
      "lastName": "Goyette"
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
    }
  }
]
app.layout = html.Div([
    collapse_table.CollapseTable(
        id='input',
        value= jsonData,
        label='my-label'
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
