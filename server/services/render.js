

exports.homeRoutes = (req, res) => { res.render("index"); }

exports.add_task = (req, res) => {   res.render("add_task"); }

exports.update_task =  (req, res) => { res.render("update_task"); }

export default exports;