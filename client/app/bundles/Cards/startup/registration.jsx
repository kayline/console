import ReactOnRails from 'react-on-rails';

import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import CardTemplate from '../components/CardTemplate';
import CardTemplateList from '../components/CardTemplateList';
import CardForm from '../components/CardForm';
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';
import Admin from '../components/Admin';
import CardSender from '../components/CardSender';

ReactOnRails.register({
	Header,
	PageTitle,
  CardTemplate,
  CardTemplateList,
  CardForm,
  CardDetails,
  CardList,
  Admin,
  CardSender
});
