import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import {
  Button,
  Card,
  Checkbox,
  Container,
  DatePicker,
  Dialog,
  Label,
  Loading,
  Modal,
  Pagination,
  Radio,
  Scroll,
  Tab,
  TextArea,
  TextField,
  Typography,
} from '@/components';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/select/Select';
import './App.css';

const tabItems = [
  {
    value: 'overview',
    label: 'Overview',
    children: (
      <Card style={{ padding: 16 }}>
        <Typography>Overview tab content.</Typography>
      </Card>
    ),
  },
  {
    value: 'activity',
    label: 'Activity',
    children: (
      <Card style={{ padding: 16 }}>
        <Typography color="secondary">Recent activity appears here.</Typography>
      </Card>
    ),
  },
  {
    value: 'settings',
    label: 'Settings',
    children: (
      <Card style={{ padding: 16 }}>
        <Typography color="secondary">Settings content for the selected tab.</Typography>
      </Card>
    ),
  },
];

const radioOptions = [
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise', disabled: true },
];

const scrollItems = Array.from({ length: 8 }, (_, index) => `Scrollable item ${index + 1}`);

function App() {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [textFieldValue, setTextFieldValue] = useState('Demo input');
  const [textAreaValue, setTextAreaValue] = useState('A multiline component preview.');
  const [selectedRadio, setSelectedRadio] = useState('pro');
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date('2026-03-26'));
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>({
    from: new Date('2026-03-20'),
    to: new Date('2026-03-26'),
  });
  const [selectValue, setSelectValue] = useState('react');
  const [selectOpen, setSelectOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Container>
      <main className="app-demo">
        <section className="app-demo__hero">
          <Typography as="h1" variant="h1">
            UI Kit Demo
          </Typography>
          <Typography color="secondary" variant="regular_text_16">
            This page renders every public component so they can be reviewed directly in the browser.
          </Typography>
        </section>

        <div className="app-demo__grid">
          <Card className="app-demo__card" style={{ padding: 24 }}>
            <Typography as="h2" variant="h2">
              Typography
            </Typography>
            <div className="app-demo__stack">
              <Typography variant="large">Large text example</Typography>
              <Typography as="h3" variant="h3">
                Heading level 3
              </Typography>
              <Typography variant="regular_text_16">Regular body text.</Typography>
              <Typography variant="bold_text_14">Bold helper text.</Typography>
              <Typography color="secondary" variant="small_text">
                Secondary small text.
              </Typography>
              <Typography as="a" href="#components" isLink>
                Link style text
              </Typography>
            </div>
          </Card>

          <Card className="app-demo__card" style={{ padding: 24 }}>
            <Typography as="h2" variant="h2">
              Buttons
            </Typography>
            <div className="app-demo__row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="link">Link</Button>
            </div>
          </Card>

          <Card className="app-demo__card" style={{ padding: 24 }}>
            <Typography as="h2" variant="h2">
              Fields
            </Typography>
            <div className="app-demo__stack">
              <Label label="Label component" required>
                <input className="app-demo__native-input" placeholder="Native input inside Label" />
              </Label>
              <TextField
                label="TextField"
                value={textFieldValue}
                onChange={(event) => setTextFieldValue(event.currentTarget.value)}
                placeholder="Type here"
              />
              <TextField search placeholder="Search mode" />
              <TextArea
                label="TextArea"
                value={textAreaValue}
                maxLength={120}
                onChange={setTextAreaValue}
                placeholder="Write something"
              />
            </div>
          </Card>

          <Card className="app-demo__card" style={{ padding: 24 }}>
            <Typography as="h2" variant="h2">
              Selection
            </Typography>
            <div className="app-demo__stack">
              <Checkbox
                checked={checkboxChecked}
                label="Accept terms"
                onChangeAction={(checked) => setCheckboxChecked(checked === true)}
              />
              <Radio options={radioOptions} value={selectedRadio} onChange={setSelectedRadio} />
              <Select open={selectOpen} value={selectValue} onOpenChange={setSelectOpen} onValueChange={setSelectValue}>
                <SelectTrigger isOpen={selectOpen} style={{ width: 240 }}>
                  <SelectValue placeholder="Select technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frontend</SelectLabel>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Backend</SelectLabel>
                    <SelectItem value="node">Node.js</SelectItem>
                    <SelectItem value="go">Go</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <Card className="app-demo__card" style={{ padding: 24 }}>
            <Typography as="h2" variant="h2">
              Date Pickers
            </Typography>
            <div className="app-demo__stack">
              <DatePicker mode="multiple" labelTitle="Single date" value={singleDate} onChangeAction={setSingleDate} />
              <DatePicker
                mode="range"
                labelTitle="Date range"
                rangeValue={rangeDate}
                onRangeChangeAction={setRangeDate}
              />
            </div>
          </Card>

          <Card className="app-demo__card app-demo__card--full" id="components" style={{ padding: 24 }}>
            <Typography as="h2" variant="h2">
              Tabs, Scroll and Pagination
            </Typography>
            <div className="app-demo__stack">
              <Tab items={tabItems} />
              <Scroll maxHeight={220}>
                <div className="app-demo__scroll-content">
                  {scrollItems.map((item) => (
                    <Card key={item} style={{ padding: 16 }}>
                      <Typography>{item}</Typography>
                    </Card>
                  ))}
                </div>
              </Scroll>
              <Pagination totalPages={12} initialPage={3} initialPageSize={20} />
            </div>
          </Card>

          <Card className="app-demo__card app-demo__card--full" style={{ padding: 24 }}>
            <Typography as="h2" variant="h2">
              Modal, Dialog and Loading
            </Typography>
            <div className="app-demo__stack">
              <div className="app-demo__row">
                <Button onClick={() => setModalOpen(true)}>Open modal</Button>
                <Button variant="secondary" onClick={() => setDialogOpen(true)}>
                  Open dialog
                </Button>
              </div>
              <div className="app-demo__loading-box">
                <Loading />
              </div>
            </div>
          </Card>
        </div>

        <Modal open={modalOpen} title="Modal demo" onClose={() => setModalOpen(false)}>
          <Typography color="secondary">
            This modal is rendered from App to verify the component directly in the browser.
          </Typography>
        </Modal>

        <Dialog
          open={dialogOpen}
          title="Dialog demo"
          confirmButtonText="Confirm"
          cancelButtonText="Cancel"
          onClose={() => setDialogOpen(false)}
          onConfirmButtonClick={() => setDialogOpen(false)}
        >
          <Typography color="secondary">
            Dialog uses the shared modal and renders action buttons in the footer.
          </Typography>
        </Dialog>
      </main>
    </Container>
  );
}

export default App;
