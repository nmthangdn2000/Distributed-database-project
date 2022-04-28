import { sortData } from '../services/base.service';
import { RESPONSE } from '../common/constants';
import * as ordertService from '../services/order.service';
import { getAll } from '../models/order.model';

const getPage = async (req, res) => {
  console.log('aa');
  res.render('admin/order-tables');
};

const getData = async (req, res) => {
  try {
    const data = await getAll();
    const abc = {
      draw: 1,
      recordsTotal: data.length,
      recordsFiltered: data.length,
      data: sortData(data),
    };
    res.json(abc);
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/order', { error: 'không thể thêm mới đơn hàng' });
  }
};

const create = async (req, res) => {
  try {
    await ordertService.create(req.body, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/order');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/order', { error: 'không thể thêm mới đơn hàng' });
  }
};

const deleteById = async (req, res) => {
  try {
    await ordertService.deleteById(req.params.id, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/order');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/order', { error: 'không thể thêm mới đơn hàng' });
  }
};

const updateById = async (req, res) => {
  try {
    await ordertService.updateById(req.body, req.serverDatabase);
    // database.connect(req.body.serverDatabase);
    res.redirect('/admin/table/order');
  } catch (error) {
    console.log(error.message);
    res.redirect('/admin/table/order', { error: 'không thể thêm mới đơn hàng' });
  }
};

export { getData, create, deleteById, updateById, getPage };
