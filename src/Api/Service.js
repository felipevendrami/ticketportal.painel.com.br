import axios from "axios";

const clientApi = axios.create({
    baseURL: 'http://localhost:8080/'
});

export const registrarUsuarioAPI = (usuario) => clientApi.post(`/usuarios`, usuario);

export const deletarUsuarioAPI = (id) => clientApi.delete(`/usuarios/${id}`);

export const getUsuarioAPI = (id) => clientApi.get(`/usuarios/${id}`);

export const getTodosUsuariosAPI = () => clientApi.get(`/usuarios`);

export const registrarEventoAPI = (evento) => clientApi.post(`/eventos`, evento);

export const deletarEventoAPI = (id) => clientApi.delete(`/eventos/${id}`);

export const getEventoAPI = (id) => clientApi.get(`/eventos/${id}`);

export const getTodosEventosAPI = () => clientApi.get(`/eventos`);

export const registrarCompraAPI = (compra) => clientApi.post(`/compras`, compra);

export const deletarCompraAPI = (id) => clientApi.delete(`/compras/${id}`);

export const getCompraAPI = (id) => clientApi.get(`/compras/${id}`);

export const getTodasComprasAPI = () => clientApi.get(`/compras`);

export const registrarItemCompraAPI = (itemCompra) => clientApi.post(`/itens-compra`, itemCompra);

export const deletarItemCompraAPI = (id) => clientApi.delete(`/itens-compra/${id}`);

export const getItemCompraAPI = (id) => clientApi.get(`/itens-compra/${id}`);

export const getTodosItensCompraAPI = () => clientApi.get(`/itens-compra`);

export const registrarTipoIngressoAPI = (tipoIngresso) => clientApi.post(`/tipo-ingressos`, tipoIngresso);

export const deletarTipoIngressoAPI = (id) => clientApi.delete(`/tipo-ingressos/${id}`);

export const getTipoIngressoAPI = (id) => clientApi.get(`/tipo-ingressos/${id}`);

export const getTodosTiposIngressoAPI = () => clientApi.get(`/tipo-ingressos`);

export const registrarIngressoAPI = (ingresso) => clientApi.post(`/ingressos`, ingresso);

export const deletarIngressoAPI = (id) => clientApi.delete(`/ingressos/${id}`);

export const getIngressoAPI = (id) => clientApi.get(`/ingressos/${id}`);

export const getTodosIngressosAPI = () => clientApi.get(`/ingressos`);