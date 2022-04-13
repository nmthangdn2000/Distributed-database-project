
    const index = (req, res, next) => {
        res.render('admin/index')
    }
    const profile = (req, res, next) => {
        res.render('admin/profile')
    }
    const chart = (req, res, next) => {
        res.render('admin/chart')
    }
    const table = (req, res, next) => {
        res.render('admin/tables')
    }
export { index, profile, chart, table };
