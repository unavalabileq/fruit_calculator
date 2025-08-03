import requests
import random
import time

# Google Form submission URL
url = "https://docs.google.com/forms/d/e/1FAIpQLSeuE14BPMejaq8TLPi5qvk2lQF-7pWnNexKNAR2hdFvm6Xckw/formResponse"

# Define weighted random answers for each entry
form_fields = {
    # Q1: 3, 4, 5 — bias toward lower end
    'entry.1057181747': lambda: str(random.choices([3, 4, 5], weights=[0.5, 0.3, 0.2])[0]),

    # Q2: 1–5 — bias toward 1,2,3
    'entry.1046382463': lambda: str(random.choices([1, 2, 3, 4, 5], weights=[0.3, 0.3, 0.2, 0.1, 0.1])[0]),

    # Q3: 1–5 — bias toward 3,4,5
    'entry.698485665': lambda: str(random.choices([1, 2, 3, 4, 5], weights=[0.3, 0.3, 0.2, 0.1, 0.1])[0]),

    # Q4: text input, number 1–5, unweighted
    'entry.878528741': lambda: str(random.randint(1, 5)),

    # Q5: text input, number 1–5, unweighted
    'entry.1651277575': lambda: str(random.randint(1, 5)),

    # Q6: Dollar ranges — bias toward expensive
    'entry.728231485': lambda: random.choices([
        '$0-50', '$51-100', '$101-150', '$151-200',
        '$200-250', '$251-300', '$301-350', '$351-400', '$400+'
    ], weights=[0.05, 0.2, 0.1, 0.1, 0.1, 0.15, 0.25, 0.25, 0.25])[0],

    # Q7: Dollar ranges — bias toward cheaper
    'entry.1906028081': lambda: random.choices([
        '$0-50', '$51-100', '$101-150', '$151-200',
        '$200-250', '$251-300', '$301-350', '$351-400', '$400+'
    ], weights=[0.25, 0.2, 0.15, 0.1, 0.1, 0.08, 0.06, 0.04, 0.2])[0],

    # Q8: 1–5 — bias toward 3,4,5
    'entry.1916401248': lambda: str(random.choices(['1', '2', '3', '4', '5'], weights=[0.1, 0.3, 0.2, 0.2, 0.2])[0]),

    # Q9: 1–5 — bias toward 1,2,3
    'entry.81428323': lambda: str(random.choices(['1', '2', '3', '4', '5'], weights=[0.3, 0.3, 0.2, 0.1, 0.1])[0]),
}

# Submit the form 114 times
for i in range(114):
    data = {field_id: gen() for field_id, gen in form_fields.items()}
    response = requests.post(url, data=data)
    print(f"[{i+1}/114] Submitted - Status {response.status_code}")
    time.sleep(random.uniform(0.3,1))  # You can reduce or randomize delay if needed
