import { useState } from 'react';
import { Button } from '@themecraft/components/Button';
import { Card, CardHeader, CardBody, CardFooter } from '@themecraft/components/Card';
import { Badge } from '@themecraft/components/Badge';
import { Input } from '@themecraft/components/Input';
import { Select } from '@themecraft/components/Select';
import { Checkbox } from '@themecraft/components/Checkbox';
import { Switch } from '@themecraft/components/Switch';
import { Radio, RadioGroup } from '@themecraft/components/Radio';
import { Alert } from '@themecraft/components/Alert';
import { Avatar, AvatarGroup } from '@themecraft/components/Avatar';
import { Tabs } from '@themecraft/components/Tabs';
import { Accordion } from '@themecraft/components/Accordion';
import { Modal, ModalBody, ModalFooter } from '@themecraft/components/Modal';
import { Dropdown } from '@themecraft/components/Dropdown';
import { Tooltip } from '@themecraft/components/Tooltip';
import { Heading, Text } from '@themecraft/components/Typography';
import { Container, Section, Stack, Row, Grid, GridItem, Spacer, Divider } from '@themecraft/components/Layout';

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [modalOpen, setModalOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <Container size="xl">
          <Row justify="between" align="center" style={{ height: '3.5rem' }}>
            <Text weight="bold" size="lg">ThemeCraft</Text>
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Row>
        </Container>
      </header>

      <main>
        {/* Hero */}
        <Section padding="xl">
          <Container size="md">
            <Stack gap="lg" align="center">
              <Badge variant="outline" color="primary">v0.1.0</Badge>
              <Heading as="h1" className="hero-title">
                ThemeCraft
              </Heading>
              <Text size="xl" color="secondary" className="hero-subtitle">
                Un design system React moderne, accessible et entièrement personnalisable.
                Construit avec des CSS variables pour un theming sans compromis.
              </Text>
              <Row gap="md" justify="center">
                <Button size="lg">Documentation</Button>
                <Button size="lg" variant="outline">GitHub</Button>
              </Row>
            </Stack>
          </Container>
        </Section>

        <Divider spacing="none" />

        {/* Examples Grid */}
        <Section padding="xl">
          <Container size="xl">
            <Grid cols={3} gap="lg">
              {/* Login Card - tall */}
              <GridItem rowSpan={2}>
                <Card variant="outlined" style={{ height: '100%' }}>
                  <CardHeader>
                    <Stack gap="xs">
                      <Heading as="h3" size="base">Se connecter</Heading>
                      <Text size="sm" color="secondary">Entrez vos identifiants</Text>
                    </Stack>
                  </CardHeader>
                  <CardBody>
                    <Stack gap="md">
                      <Input label="Email" type="email" placeholder="vous@exemple.com" leftIcon={<MailIcon />} />
                      <Input label="Mot de passe" type="password" placeholder="••••••••" />
                      <Checkbox label="Se souvenir de moi" />
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button fullWidth>Connexion</Button>
                  </CardFooter>
                </Card>
              </GridItem>

              {/* Dashboard Stats - wide */}
              <GridItem colSpan={2}>
                <Card variant="outlined" style={{ height: '100%' }}>
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Dashboard</Heading>
                      <Grid cols={3} gap="sm">
                        <Card variant="filled">
                          <CardBody>
                            <Stack gap="xs">
                              <Text size="xs" color="secondary">Utilisateurs</Text>
                              <Heading as="h4" size="xl">2,847</Heading>
                              <Badge color="success" size="xs">+12.5%</Badge>
                            </Stack>
                          </CardBody>
                        </Card>
                        <Card variant="filled">
                          <CardBody>
                            <Stack gap="xs">
                              <Text size="xs" color="secondary">Revenus</Text>
                              <Heading as="h4" size="xl">$45K</Heading>
                              <Badge color="success" size="xs">+8.2%</Badge>
                            </Stack>
                          </CardBody>
                        </Card>
                        <Card variant="filled">
                          <CardBody>
                            <Stack gap="xs">
                              <Text size="xs" color="secondary">Commandes</Text>
                              <Heading as="h4" size="xl">1,293</Heading>
                              <Badge color="error" size="xs">-3.1%</Badge>
                            </Stack>
                          </CardBody>
                        </Card>
                      </Grid>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>

              {/* Buttons & Badges */}
              <GridItem rowSpan={2}>
                <Card variant="outlined" className="tc-full-height">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Boutons</Heading>
                      <Row gap="sm">
                        <Button size="sm">Primary</Button>
                        <Button variant="outline" size="sm">Outline</Button>
                        <Button variant="ghost" size="sm">Ghost</Button>
                      </Row>
                      <Divider spacing="sm" />
                      <Heading as="h3" size="base">Badges</Heading>
                      <Row gap="sm">
                        <Badge>Default</Badge>
                        <Badge color="success">Success</Badge>
                        <Badge color="error">Error</Badge>
                      </Row>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>


              {/* Settings Card - tall */}
              <GridItem rowSpan={2}>
                <Card variant="outlined" className="tc-full-height">
                  <CardBody>
                    <Tabs
                      variant="line"
                      items={[
                        {
                          id: 'profile',
                          label: 'Profil',
                          content: (
                            <Stack gap="md" style={{ paddingTop: '1rem' }}>
                              <Row gap="md">
                                <Avatar fallback="JD" size="lg" />
                                <Stack gap="xs">
                                  <Text weight="medium">Jean Dupont</Text>
                                  <Text size="sm" color="secondary">jean@exemple.com</Text>
                                </Stack>
                              </Row>
                              <Input label="Nom" defaultValue="Jean Dupont" />
                              <Button>Sauvegarder</Button>
                            </Stack>
                          ),
                        },
                        {
                          id: 'notifications',
                          label: 'Notifications',
                          content: (
                            <Stack gap="md" style={{ paddingTop: '1rem' }}>
                              <Switch label="Notifications email" defaultChecked />
                              <Switch label="Notifications push" />
                              <Switch label="Newsletter" defaultChecked />
                            </Stack>
                          ),
                        },
                      ]}
                    />
                  </CardBody>
                </Card>
              </GridItem>

              {/* Team Card */}
              <Card variant="outlined" className="tc-full-height">
                <CardHeader>
                  <Row justify="between" align="center">
                    <Heading as="h3" size="base">Équipe</Heading>
                    <AvatarGroup max={3} size="xs">
                      <Avatar fallback="AL" />
                      <Avatar fallback="BM" />
                      <Avatar fallback="CN" />
                      <Avatar fallback="DO" />
                    </AvatarGroup>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Stack gap="sm">
                    {[
                      { name: 'Alice Laurent', role: 'Admin', status: 'online' as const },
                      { name: 'Bob Martin', role: 'Éditeur', status: 'away' as const },
                    ].map((member) => (
                      <Row key={member.name} justify="between" align="center">
                        <Row gap="sm">
                          <Avatar fallback={member.name.split(' ').map(n => n[0]).join('')} status={member.status} size="sm" />
                          <Stack gap="none">
                            <Text size="sm" weight="medium">{member.name}</Text>
                            <Text size="xs" color="secondary">{member.role}</Text>
                          </Stack>
                        </Row>
                        <Dropdown
                          trigger={<Button variant="ghost" size="xs">...</Button>}
                          items={[
                            { id: 'edit', label: 'Modifier' },
                            { id: 'remove', label: 'Retirer', danger: true },
                          ]}
                        />
                      </Row>
                    ))}
                  </Stack>
                </CardBody>
              </Card>

              {/* Alerts - wide */}
              <GridItem colSpan={2}>
                <Card variant="outlined" style={{ height: '100%' }}>
                  <CardBody>
                    <Stack gap="sm">
                      <Heading as="h3" size="base">Alertes</Heading>
                      <Grid cols={2} gap="sm">
                        <Alert color="success" title="Succès">Modifications enregistrées.</Alert>
                        <Alert color="warning" title="Attention">Abonnement expire bientôt.</Alert>
                        <Alert color="error" title="Erreur">Une erreur est survenue.</Alert>
                        <Alert color="info" title="Info">Nouvelle version disponible.</Alert>
                      </Grid>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>

              {/* Form */}
              <Card variant="outlined" className="tc-full-height">
                <CardBody>
                  <Stack gap="md">
                    <Heading as="h3" size="base">Formulaire</Heading>
                    <Grid cols={2} gap="sm">
                      <Input label="Prénom" placeholder="Jean" />
                      <Input label="Nom" placeholder="Dupont" />
                    </Grid>
                    <Select
                      label="Pays"
                      placeholder="Sélectionner"
                      options={[
                        { value: 'fr', label: 'France' },
                        { value: 'be', label: 'Belgique' },
                      ]}
                    />
                    <RadioGroup name="plan" defaultValue="pro" direction="horizontal">
                      <Radio value="free" label="Gratuit" />
                      <Radio value="pro" label="Pro" />
                    </RadioGroup>
                  </Stack>
                </CardBody>
              </Card>

              {/* Typography - tall */}
              <GridItem rowSpan={2}>
                <Card variant="outlined" style={{ height: '100%' }}>
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Typographie</Heading>
                      <Stack gap="xs">
                        <Heading as="h1" size="2xl">Heading 2XL</Heading>
                        <Heading as="h2" size="xl">Heading XL</Heading>
                        <Heading as="h3" size="lg">Heading LG</Heading>
                        <Heading as="h4" size="base">Heading Base</Heading>
                      </Stack>
                      <Divider spacing="sm" />
                      <Stack gap="xs">
                        <Text size="lg">Text Large</Text>
                        <Text>Text Base</Text>
                        <Text size="sm" color="secondary">Text Small</Text>
                        <Text size="xs" color="tertiary">Text XS</Text>
                      </Stack>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>

              {/* FAQ */}
              <Card variant="outlined" className="tc-full-height">
                <CardBody>
                  <Stack gap="md">
                    <Heading as="h3" size="base">FAQ</Heading>
                    <Accordion
                      variant="separated"
                      items={[
                        { id: '1', title: 'Installation ?', content: <Text size="sm">npm install themecraft</Text> },
                        { id: '2', title: 'Dark mode ?', content: <Text size="sm">data-theme="dark"</Text> },
                      ]}
                    />
                  </Stack>
                </CardBody>
              </Card>

              {/* Modal & Tooltips */}
              <Card variant="outlined" className="tc-full-height">
                <CardBody>
                  <Stack gap="md">
                    <Heading as="h3" size="base">Modal & Tooltips</Heading>
                    <Row gap="sm">
                      <Button size="sm" onClick={() => setModalOpen(true)}>Modal</Button>
                      <Tooltip content="Hello!" placement="top">
                        <Button variant="outline" size="sm">Tooltip</Button>
                      </Tooltip>
                    </Row>
                    <Row gap="xs">
                      <Tooltip content="Top" placement="top"><Badge>T</Badge></Tooltip>
                      <Tooltip content="Right" placement="right"><Badge>R</Badge></Tooltip>
                      <Tooltip content="Bottom" placement="bottom"><Badge>B</Badge></Tooltip>
                      <Tooltip content="Left" placement="left"><Badge>L</Badge></Tooltip>
                    </Row>
                  </Stack>
                </CardBody>
              </Card>
            </Grid>
          </Container>
        </Section>

        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Confirmer l'action"
          description="Cette action est irréversible."
        >
          <ModalBody>
            <Text>Êtes-vous sûr de vouloir continuer ?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Annuler</Button>
            <Button color="error" onClick={() => setModalOpen(false)}>Confirmer</Button>
          </ModalFooter>
        </Modal>

        <Divider spacing="lg" />

        {/* Helpers Section */}
        <Section padding="xl">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="sm" align="center">
                <Badge variant="outline">Utilities</Badge>
                <Heading as="h2" size="xl">Helpers CSS</Heading>
                <Text color="secondary">Classes utilitaires pour un styling rapide</Text>
              </Stack>

              <Grid cols={2} gap="lg">
                {/* Background Colors */}
                <Card variant="outlined">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Background Colors</Heading>
                      <Row gap="sm" wrap>
                        <Badge className="tc-bg-primary">.tc-bg-primary</Badge>
                        <Badge className="tc-bg-secondary">.tc-bg-secondary</Badge>
                        <Badge className="tc-bg-success">.tc-bg-success</Badge>
                        <Badge className="tc-bg-warning">.tc-bg-warning</Badge>
                        <Badge className="tc-bg-error">.tc-bg-error</Badge>
                        <Badge className="tc-bg-info">.tc-bg-info</Badge>
                      </Row>
                    </Stack>
                  </CardBody>
                </Card>

                {/* Border Radius */}
                <Card variant="outlined">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Border Radius</Heading>
                      <Row gap="sm" wrap>
                        <Badge className="tc-bg-primary tc-rounded-none">none</Badge>
                        <Badge className="tc-bg-primary tc-rounded-sm">sm</Badge>
                        <Badge className="tc-bg-primary tc-rounded">md</Badge>
                        <Badge className="tc-bg-primary tc-rounded-lg">lg</Badge>
                        <Badge className="tc-bg-primary tc-rounded-xl">xl</Badge>
                        <Badge className="tc-bg-primary tc-rounded-full">full</Badge>
                      </Row>
                    </Stack>
                  </CardBody>
                </Card>

                {/* Shadows */}
                <Card variant="outlined">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Shadows</Heading>
                      <Row gap="md" wrap>
                        <Card variant="filled" className="tc-shadow-none"><CardBody><Text size="xs">none</Text></CardBody></Card>
                        <Card variant="filled" className="tc-shadow-sm"><CardBody><Text size="xs">sm</Text></CardBody></Card>
                        <Card variant="filled" className="tc-shadow"><CardBody><Text size="xs">md</Text></CardBody></Card>
                        <Card variant="filled" className="tc-shadow-lg"><CardBody><Text size="xs">lg</Text></CardBody></Card>
                        <Card variant="filled" className="tc-shadow-xl"><CardBody><Text size="xs">xl</Text></CardBody></Card>
                      </Row>
                    </Stack>
                  </CardBody>
                </Card>

                {/* Text Utilities */}
                <Card variant="outlined">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Text Utilities</Heading>
                      <Stack gap="sm">
                        <Card variant="filled">
                          <CardBody>
                            <Text className="tc-truncate">
                              .tc-truncate - Ce texte très long sera tronqué avec une ellipse à la fin
                            </Text>
                          </CardBody>
                        </Card>
                        <Row gap="sm">
                          <Badge variant="outline">.tc-text-left</Badge>
                          <Badge variant="outline">.tc-text-center</Badge>
                          <Badge variant="outline">.tc-text-right</Badge>
                        </Row>
                      </Stack>
                    </Stack>
                  </CardBody>
                </Card>
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Divider spacing="lg" />

        {/* Layouts Section */}
        <Section padding="xl">
          <Container size="xl">
            <Stack gap="xl">
              <Stack gap="sm" align="center">
                <Badge variant="outline">Layout</Badge>
                <Heading as="h2" size="xl">Composants de mise en page</Heading>
                <Text color="secondary">Stack, Row, Grid et GridItem pour des layouts flexibles</Text>
              </Stack>

              <Grid cols={3} gap="lg">
                {/* Stack Demo */}
                <Card variant="outlined">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Stack</Heading>
                      <Text size="sm" color="secondary">Disposition verticale</Text>
                      <Stack gap="xs">
                        <Card variant="filled"><CardBody><Text size="xs">Item 1</Text></CardBody></Card>
                        <Card variant="filled"><CardBody><Text size="xs">Item 2</Text></CardBody></Card>
                        <Card variant="filled"><CardBody><Text size="xs">Item 3</Text></CardBody></Card>
                      </Stack>
                    </Stack>
                  </CardBody>
                </Card>

                {/* Row Demo */}
                <Card variant="outlined">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Row</Heading>
                      <Text size="sm" color="secondary">Disposition horizontale</Text>
                      <Row gap="xs">
                        <Card variant="filled"><CardBody><Text size="xs">A</Text></CardBody></Card>
                        <Card variant="filled"><CardBody><Text size="xs">B</Text></CardBody></Card>
                        <Card variant="filled"><CardBody><Text size="xs">C</Text></CardBody></Card>
                      </Row>
                      <Row gap="xs" justify="between">
                        <Badge color="primary">Left</Badge>
                        <Badge color="success">Right</Badge>
                      </Row>
                    </Stack>
                  </CardBody>
                </Card>

                {/* Grid Demo */}
                <Card variant="outlined">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Grid</Heading>
                      <Text size="sm" color="secondary">Grille CSS</Text>
                      <Grid cols={2} gap="xs">
                        <Card variant="filled"><CardBody><Text size="xs">1</Text></CardBody></Card>
                        <Card variant="filled"><CardBody><Text size="xs">2</Text></CardBody></Card>
                        <Card variant="filled"><CardBody><Text size="xs">3</Text></CardBody></Card>
                        <Card variant="filled"><CardBody><Text size="xs">4</Text></CardBody></Card>
                      </Grid>
                    </Stack>
                  </CardBody>
                </Card>

                {/* Spacer & Divider */}
                <Card variant="outlined">
                  <CardBody>
                    <Stack gap="md">
                      <Heading as="h3" size="base">Spacer & Divider</Heading>
                      <Card variant="filled"><CardBody><Text size="xs">Avant</Text></CardBody></Card>
                      <Divider spacing="sm" />
                      <Card variant="filled"><CardBody><Text size="xs">Après Divider</Text></CardBody></Card>
                      <Spacer size="md" />
                      <Card variant="filled"><CardBody><Text size="xs">Après Spacer</Text></CardBody></Card>
                    </Stack>
                  </CardBody>
                </Card>

                {/* GridItem colSpan */}
                <GridItem colSpan={2}>
                  <Card variant="outlined" className="tc-full-height">
                    <CardBody>
                      <Stack gap="md">
                        <Heading as="h3" size="base">GridItem avec colSpan</Heading>
                        <Text size="sm" color="secondary">Cette carte utilise colSpan=2</Text>
                        <Grid cols={4} gap="xs">
                          <GridItem colSpan={2}>
                            <Card className="tc-bg-primary"><CardBody><Text size="xs">colSpan=2</Text></CardBody></Card>
                          </GridItem>
                          <Card variant="filled"><CardBody><Text size="xs">1</Text></CardBody></Card>
                          <Card variant="filled"><CardBody><Text size="xs">1</Text></CardBody></Card>
                          <Card variant="filled"><CardBody><Text size="xs">1</Text></CardBody></Card>
                          <GridItem colSpan={3}>
                            <Card className="tc-bg-success"><CardBody><Text size="xs">colSpan=3</Text></CardBody></Card>
                          </GridItem>
                        </Grid>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Spacer size="2xl" />
      </main>
    </div>
  );
}

export default App;
