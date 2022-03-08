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

const createApplication = async (jsonData) => {
  let url = `${baseUrl}/application`;

  let data = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonData),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  let application = await data;

  return application;
};


