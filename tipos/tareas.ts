export const estadosKanban = [
  "DEFINIDO",
  "EN_CURSO",
  "BLOQUEADO",
  "TERMINADO"
] as const;

export type EstadoKanban = (typeof estadosKanban)[number];

export type PrioridadTarea = "BAJA" | "MEDIA" | "ALTA" | "URGENTE";

export type TipoTarea =
  | "Reunion"
  | "Analisis"
  | "Planificacion"
  | "Seguimiento"
  | "Documentacion"
  | "Coordinacion";

export type OrdenTablero =
  | "manual"
  | "titulo"
  | "tipo"
  | "prioridad"
  | "fechaDeseable"
  | "fechaCreacion";

export type SentidoOrden = "asc" | "desc";

export type Persona = {
  identificador: string;
  nombre: string;
  area: string;
  foto: string;
};

export type BorradorPersona = Omit<Persona, "identificador">;

export type Tarea = {
  identificador: string;
  fechaCreacion: string;
  titulo: string;
  tipo: TipoTarea;
  prioridad: PrioridadTarea;
  fechaDeseableFin: string;
  observaciones: string;
  enlace: string;
  estado: EstadoKanban;
  personaAsignadaId: string;
  indiceOrden: number;
};

export type BorradorTarea = Omit<Tarea, "identificador" | "fechaCreacion" | "indiceOrden">;

export type ConfiguracionCargaRapida = {
  lineas: string;
  tipo: TipoTarea;
  prioridad: PrioridadTarea;
  estado: EstadoKanban;
  fechaDeseableFin: string;
};

export type DestinoArrastre = {
  estado: EstadoKanban;
  indice: number;
};
