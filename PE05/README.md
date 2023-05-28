# Input
This program uses touch input to navigate between four tabs: Cities, AddCity, Countries, and AddCountry. AddCity and AddCountry accept further user input. 
AddCity takes the name of a City and its Country, and AddCountry takes the name of a Country and its Currency.
# Process
The AddCity and AddCountry pages function identically, except with different inputs. Cities have two properties: city and country. Using the respective input boxes changes the state of
city's properties. Those are then added to the list on the Cities tab. Countries also have two properties: country and currency, which then alter the state of country similarly. Styles from the StyleSheet are applied to the list text in the Cities and Countries tabs, so the namesake property of the page (city or country, respectively) is displayed more prominently and the secondary property (country or currency, respectively) is displayed smaller underneath the city or country.
# Output
Before any cities or countries are added, Cities page and Countries tab each display a message that no cities are saved or no countries are saved, depending on which tab is open. Afterward, each tab displays the added cities or added countries, depending on whether the cities tab is open or the countries tab is open.