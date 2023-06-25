import axios from "axios";

const clientApi = axios.create({
    baseURL: 'http://localhost:8080/'
});

export const registrarEventoAPI = (evento) => clientApi.post(`/evento`,evento);

export const retornaTodosEventosAPI = () => clientApi.get(`/eventos`);

export const registrarTipoIngressoAPI = (evento) => clientApi.post(`/tipo_ingresso`,evento);