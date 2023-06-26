import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const registrarUsuarioAPI = (usuario) =>
  clientApi.post(`/usuarios`, usuario);

export const deletarUsuarioAPI = (id, token) =>
  clientApi.delete(`/usuarios/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getUsuarioAPI = (id, token) =>
  clientApi.get(`/usuarios/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getTodosUsuariosAPI = (token) =>
  clientApi.get(`/usuarios`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const registrarEventoAPI = (evento, token) =>
  clientApi.post(`/eventos`, evento, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deletarEventoAPI = (id, token) =>
  clientApi.delete(`/eventos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getEventoAPI = (id, token) =>
  clientApi.get(`/eventos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getTodosEventosAPI = (token) =>
  clientApi.get(`/eventos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const registrarCompraAPI = (compra, token) =>
  clientApi.post(`/compras`, compra, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deletarCompraAPI = (id, token) =>
  clientApi.delete(`/compras/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getCompraAPI = (id, token) =>
  clientApi.get(`/compras/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getTodasComprasAPI = (token) =>
  clientApi.get(`/compras`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const registrarItemCompraAPI = (itemCompra, token) =>
  clientApi.post(`/itens-compra`, itemCompra, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deletarItemCompraAPI = (id, token) =>
  clientApi.delete(`/itens-compra/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getItemCompraAPI = (id, token) =>
  clientApi.get(`/itens-compra/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getTodosItensCompraAPI = (token) =>
  clientApi.get(`/itens-compra`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const registrarTipoIngressoAPI = (tipoIngresso, token) =>
  clientApi.post(`/tipo-ingressos`, tipoIngresso, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deletarTipoIngressoAPI = (id, token) =>
  clientApi.delete(`/tipo-ingressos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getTipoIngressoAPI = (id, token) =>
  clientApi.get(`/tipo-ingressos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


export const getTodosTiposIngressoAPI = (token) =>
  clientApi.get(`/tipo-ingressos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  export const getTodosTiposIngressoDoEventoAPI = (token,evento) =>
  clientApi.get(`/tipo-ingressos/evento`, evento, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const registrarIngressoAPI = (ingresso, token) =>
  clientApi.post(`/ingressos`, ingresso, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  export const atualizarTipoIngressoAPI = (id,ingresso, token) =>
  clientApi.post(`/ingressos/${id}`, ingresso, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


export const deletarIngressoAPI = (id, token) =>
  clientApi.delete(`/ingressos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getIngressoAPI = (id, token) =>
  clientApi.get(`/ingressos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getTodosIngressosAPI = (token) =>
  clientApi.get(`/ingressos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
