let baseUrl = "https://bootcamp-2022.devtest.ge/api";

const getSkills = async () => {
  let url = `${baseUrl}/skills`;

  let data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  let skills = await data;

  return skills;
};

const getApplications = async (token) => {
  let url = `${baseUrl}/applications?token=${encodeURIComponent(token)}`;

  let data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  let applications = await data;

  return applications;
};

const createApplication = (jsonData, href) => {
  let url = `${baseUrl}/application`;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      window.location.href = href;
    }
  };

  xhr.send(JSON.stringify(jsonData));
};
