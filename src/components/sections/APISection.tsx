
import { CodeExample } from '@/components/features/CodeExample';
import React from 'react';

const javascriptCodeExample = `// Using ES6 async/await syntax
import { AxonClient } from 'axon-js';

async function createChannel() {
  try {
    // Initialize the client with your auth token
    const client = new AxonClient({
      token: process.env.AXON_TOKEN
    });
    
    // Create a new channel in a server
    const channel = await client.createChannel({
      serverId: "server_id_123",
      name: "javascript-discussion",
      topic: "All things JavaScript!"
    });
    
    console.log(\`Created channel: \${channel.name}\`);
  } catch (error) {
    console.error("Failed to create channel:", error);
  }
}

createChannel();`;

const javaCodeExample = `import com.axon.api.AxonClient;
import com.axon.api.Channel;
import com.axon.api.MessageParams;

public class AxonExample {
    public static void main(String[] args) {
        try {
            // Initialize the client with your auth token
            AxonClient client = new AxonClient.Builder()
                .setToken(System.getenv("AXON_TOKEN"))
                .build();
            
            // Get list of all channels in a server
            List<Channel> channels = client.getChannels("server_id_123");
            
            // Send a message to the first channel
            if (!channels.isEmpty()) {
                MessageParams params = new MessageParams("Hello from Java!");
                String messageId = client.sendMessage(channels.get(0).getId(), params);
                System.out.println("Sent message: " + messageId);
            }
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}`;

export function APISection() {
  return (
    <section id="api" className="py-16 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="gradient-text">Open API</span> for Unlimited Possibilities
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Build custom bots, extensions and integrations in any programming language
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">JavaScript SDK</h3>
            <CodeExample 
              language="JavaScript"
              code={javascriptCodeExample}
              caption="Modern JavaScript client with promise-based API"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Java Example</h3>
            <CodeExample 
              language="Java"
              code={javaCodeExample}
              caption="Robust Java client with comprehensive error handling"
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Use any language that can make HTTP requests or WebSocket connections. <br/>
            <span className="text-foreground font-medium">Official API packages coming soon.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
