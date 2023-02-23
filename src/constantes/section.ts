interface ISectionProps {
  id: string;
  title: string;
  subtitle?: string;
  headerTitle?: string;
}

export interface ISection {
  home: ISectionProps;
  about: ISectionProps;
  team: ISectionProps;
  operation: ISectionProps;
  testimony: ISectionProps;
  contact: ISectionProps;
}

export const section: ISection = {
  home: {
    id: 'home',
    title: 'Início',
    headerTitle: 'Início',
  },
  about: {
    id: 'about',
    title: 'Sobre nós',
    subtitle: 'Melhor escritório de advogados da região',
    headerTitle: 'Sobre',
  },
  team: {
    id: 'team',
    title: 'Nossa equipe',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    headerTitle: 'Equipe',
  },
  operation: {
    id: 'operation',
    title: 'Nossas areas de atuação',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    headerTitle: 'Atuação',
  },
  testimony: {
    id: 'testimony',
    title: 'Depoimentos',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    headerTitle: 'Depoimentos',
  },
  contact: {
    id: 'contact',
    title: 'Contato',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    headerTitle: 'Contato',
  },
};
