import{b as o,aV as r}from"./index.js";import{f as l}from"./vue-625a50e2.js";import{al as n}from"./antd-d44a863f.js";const{t}=o();function d(){return[{dataIndex:"type",title:t("sys.errorLog.tableColumnType"),width:80,customRender:({text:e})=>{const a=e===r.VUE?"green":e===r.RESOURCE?"cyan":e===r.PROMISE?"blue":r.AJAX?"red":"purple";return l(n,{color:a},{default:()=>e})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:t("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:t("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:t("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:t("sys.errorLog.tableColumnStackMsg")}]}function u(){return d().map(e=>({field:e.dataIndex,label:e.title}))}export{d as getColumns,u as getDescSchema};
