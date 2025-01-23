import json
from jinja2 import Template

limit = round(2147483647 / 775)

def get_even_odd_arrays():
    even = []
    odd = []

    is_even = True # '0' is even
    for i in range(0, limit + 1):
        if is_even:
            even.append(i)
        else:
            odd.append(i)
        is_even = not is_even
    return even, odd

def generate_index_js():
    # Read the template content from the file
    with open('is-it-even-odd.js.jinja2', 'r') as file:
        js_template = file.read()
    # Create a Jinja2 Template object
    template = Template(js_template)

    even, odd = get_even_odd_arrays()

    # Define the variables
    variables = {
        "even": json.dumps(even),
        "odd": json.dumps(odd),
        "limit": limit
    }
    # Render the template with the variables
    rendered_js = template.render(variables)
    # Write the rendered content to a .js file
    with open('index.js', 'w') as js_file:
        js_file.write(rendered_js)
    print("JavaScript file generated successfully!")

if __name__=="__main__":
    generate_index_js()