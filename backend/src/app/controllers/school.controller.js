const schoolService = require("../../core/services/school.services");
const viacepService = require("../services/viacep");

class schoolController {
  async insert({ body, header }, res) {
    const viacepResult = await viacepService(body.address_postalcode);
    const { localidade } = JSON.parse(viacepResult);

    body.address_city = localidade;

    return schoolService
      .insert(body)
      .then(resul => res.status(200).json(resul))
      .catch(err => {
        console.log("error on insert", err);
        return res.status(500).json({ error: "error on insert" });
      });
  }
}

module.exports = new schoolController();
