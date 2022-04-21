// import authService from '../services/auth.service';
import { RESPONSE } from '../common/constants';
import * as productService from '../services/product.service';
import { getAll } from '../models/product.model';

const getPage = async (req, res) => {
  console.log('aa');
  res.render('admin/product-tables');
};

const getData = async (req, res) => {
  try {
    const data = await getAll();
    const abc = {
      draw: 1,
      recordsTotal: data.length,
      recordsFiltered: data.length,
      data: data,
    };
    res.json(abc);
  } catch (error) {
    console.log(error.message);
    responseError(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    await productService.create(req.body, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/product');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/product', { error: 'không thể thêm mới sản phẩm' });
  }
};

const deleteById = async (req, res) => {
  try {
    await productService.deleteById(req.params.id, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/product');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/product', { error: 'không thể thêm mới sản phẩm' });
  }
};

const updateById = async (req, res) => {
  try {
    await productService.updateById(req.body, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/product');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/product', { error: 'không thể thêm mới sản phẩm' });
  }
};

export { getData, create, deleteById, updateById, getPage };
