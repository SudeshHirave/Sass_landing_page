const sample = {
  javascript: `// Get a user’s access token and
// profile data from an Identity Provider

import WorkOS from '@workos-inc/node';

const workos = new WorkOS('sk_example_123456789');

const profile = await workos.sso.getProfileAndToken({
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  clientID: 'client_123456789',
});
`,
  ruby: `# Get a user’s access token and
# profile data from an Identity Provider

require 'workos'

WorkOS.key = 'sk_example_123456789'

WorkOS::SSO.profile_and_token(
  code: '01E2RJ4C05B52KKZ8FSRDAP23J',
  client_id: 'client_123456789',
)
`,
  python: `# Get a user’s access token and
# profile data from an Identity Provider

import workos
from workos import client

workos.api_key = 'sk_example_123456789'
workos.client_id = 'client_123456789'

client.sso.get_profile_and_token('01E2RJ4C05B52KKZ8FSRDAP23J')
`,
  go: `// Get a user’s access token and
// profile data from an Identity Provider

import "github.com/workos/workos-go/pkg/sso"

sso.SetAPIKey("sk_example_123456789")

sso.GetProfileAndToken(
  context.Background(),
  sso.GetProfileAndTokenOptions{
    Code: "01E2RJ4C05B52KKZ8FSRDAP23J",
  }
)
`,
  php: `// Get a user’s access token and
// profile data from an Identity Provider

$this->sso = new WorkOS\\SSO();

$profile = $this->sso->getProfileAndToken("01E2RJ4C05B52KKZ8FSRDAP23J");
`,
  java: `// Get a user’s access token and
// profile data from an Identity Provider

import com.workos.WorkOS;

WorkOS workos = new WorkOS("sk_example_123456");

ProfileAndToken profileAndToken = workos.sso.getProfileAndToken("01E2RJ4C05B52KKZ8FSRDAP23J", "client_123456789");

Profile profile = profileAndToken.profile;
`,
  dotnet: `// Get a user’s access token and
// profile data from an Identity Provider

WorkOS.SetApiKey("sk_example_123456");

var ssoService = new SSOService();
var options = new GetProfileAndTokenOptions
{
    ClientId = "client_123456789",
    Code = "01E2RJ4C05B52KKZ8FSRDAP23J",
};

var profile = await ssoService.GetProfileAndToken(options);
`,
  curl: `curl --request POST \\
  --url "https://api.workos.com/sso/token? \\
  client_id=client_123456789& \\
  client_secret=sk_example_123456789& \\
  grant_type=authorization_code& \\
  code=01E2RJ4C05B52KKZ8FSRDAP23J"
`
};
export default sample;
